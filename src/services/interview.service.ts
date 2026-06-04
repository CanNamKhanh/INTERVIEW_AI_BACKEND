import { AI_MODEL, openai } from "../libs/openai";
import { prisma } from "../libs/prisma";
import { InterviewType } from "../prisma/src/generated/prisma";
import { CreateInterviewInput } from "../schemas/interview.schema";

export const createInterviewService = async (input: CreateInterviewInput) => {
  const { title, position, level, userId, type, yearsOfExperience, category } =
    input;

  const categoryRecord = await prisma.industryCategory.findFirst({
    where: { name: category },
  });

  if (!categoryRecord) {
    throw new Error("Selected industry category does not exist.");
  }

  const interview = await prisma.interview.create({
    data: {
      title,
      position,
      level,
      userId,
      type: type as InterviewType,
      yearsOfExperience,
      categoryId: categoryRecord.id,
    },
    select: {
      id: true,
      userId: true,
      title: true,
      position: true,
      level: true,
      yearsOfExperience: true,
      category: true,
      status: true,
      createdAt: true,
    },
  });

  await prisma.message.create({
    data: {
      interviewId: interview.id,
      role: "ASSISTANT",
      content: `Hello! Welcome to your interview session. I am your AI interviewer today. We will be conducting a ${type} interview for the ${position} position at a ${level} level. To start off, could you please briefly introduce yourself and some of your outstanding projects?`,
    },
  });

  return { interview };
};

export const endInterviewService = async (interviewId: string) => {
  // 1. Kiểm tra xem cuộc phỏng vấn có tồn tại không
  const interview = await prisma.interview.findUnique({
    where: { id: interviewId },
  });

  if (!interview) throw new Error("Interview not found");
  if (interview.status === "COMPLETED")
    throw new Error("This interview is already completed.");

  // 2. Lấy toàn bộ lịch sử đoạn chat để gửi cho AI chấm điểm
  const messages = await prisma.message.findMany({
    where: { interviewId },
    orderBy: { createdAt: "asc" },
  });

  if (messages.length === 0) {
    throw new Error("Cannot evaluate an empty interview session.");
  }

  // 3. Định dạng lại lịch sử chat cho OpenAI
  const conversationHistory = messages.map((msg) => ({
    role: msg.role.toLowerCase() as "user" | "assistant" | "system",
    content: msg.content,
  }));

  // 4. Tạo System Prompt ép AI trả về dữ liệu chấm điểm dạng JSON
  const evaluationPrompt = `You are a senior tech recruiter and hiring manager with 15+ years of experience. You have seen thousands of candidates — great ones, average ones, and poor ones. You give honest, direct, no-sugarcoating feedback because you believe candidates deserve the truth to actually improve.

## Your Evaluation Principles

- **Radical honesty.** Do not inflate scores to be nice. A weak answer is a weak answer. Call it out clearly.
- **No flattery.** Avoid phrases like "Great job!", "You did well overall", or any hollow encouragement unless it is genuinely warranted.
- **Specific, not vague.** Every pro and con must reference something concrete from the transcript — not generic statements like "good communication".
- **Constructive but blunt.** You respect the candidate enough to tell them exactly what is wrong and what they must do to fix it.

---

## Scoring Rubric (apply strictly)

- 90–100: Exceptional. Would hire immediately with high confidence.
- 75–89: Strong candidate. Minor gaps, but solid overall.
- 60–74: Average. Passes the bar but needs improvement in key areas.
- 40–59: Below expectations. Significant gaps for the role and level.
- 0–39: Poor performance. Not ready for this position.

Score based on what was actually demonstrated in the transcript — not on potential or assumptions.

---

## Language Rule

- Detect the language the candidate predominantly used in the transcript.
- Write ALL string fields (pros, cons, detailedFeedback) in that exact language.
- Never mix languages across fields.

---

## Output Format

You MUST respond ONLY with a raw JSON object — no markdown, no code fences, no explanation before or after.

Exact structure:
{
  "overallScore": number,         // 0–100, weighted average of the three scores below
  "technicalScore": number,       // 0–100, depth and accuracy of technical knowledge
  "communicationScore": number,   // 0–100, clarity, structure, and professionalism of answers
  "problemSolvingScore": number,  // 0–100, logical thinking and approach to problems
  "pros": string[],               // Minimum 2, maximum 5. Specific strengths backed by transcript evidence.
  "cons": string[],               // Minimum 2, maximum 5. Specific weaknesses with clear reasoning.
  "detailedFeedback": string      // 3–5 sentences. Honest overall verdict. What the candidate must do to improve. No sugarcoating.
}`;

  // 5. Gọi OpenAI/OpenRouter với chế độ response_format: JSON
  const response = await openai.chat.completions.create({
    model: AI_MODEL,
    messages: [
      { role: "system", content: evaluationPrompt },
      ...conversationHistory,
    ],
    // 💡 Mẹo: Ép AI bắt buộc phải rặn ra chuỗi JSON hợp lệ, không bị dính chữ thừa
    response_format: { type: "json_object" },
  });

  const jsonString = response?.choices[0]?.message.content;
  if (!jsonString) throw new Error("Failed to generate feedback from AI.");

  // Parse chuỗi JSON từ AI sang Object
  const aiFeedback = JSON.parse(jsonString);

  // 6. Thực hiện Transaction lưu dữ liệu
  const result = await prisma.$transaction(async (tx) => {
    // Cập nhật trạng thái cuộc phỏng vấn thành COMPLETED
    const updatedInterview = await tx.interview.update({
      where: { id: interviewId },
      data: { status: "COMPLETED" },
    });

    // Lưu dữ liệu vào đúng các trường trong model Feedback của bạn
    const feedback = await tx.feedback.create({
      data: {
        interviewId,
        // Lưu điểm số tổng quan dạng Int số nguyên
        overallScore: Number(aiFeedback.overallScore),

        // Gộp mảng điểm mạnh thành chuỗi văn bản, mỗi ý một dòng
        strengths: aiFeedback.pros.map((p: string) => `• ${p}`).join("\n"),

        // Gộp mảng điểm yếu thành chuỗi văn bản, mỗi ý một dòng
        weaknesses: aiFeedback.cons.map((c: string) => `• ${c}`).join("\n"),

        // Gộp điểm thành phần (Tech, Comm, Problem Solving) và nhận xét chi tiết vào summary
        summary:
          `Điểm chi tiết:\n` +
          `- Kỹ thuật (Technical): ${aiFeedback.technicalScore}/100\n` +
          `- Giao tiếp (Communication): ${aiFeedback.communicationScore}/100\n` +
          `- Giải quyết vấn đề (Problem Solving): ${aiFeedback.problemSolvingScore}/100\n\n` +
          `Đánh giá tổng quan:\n${aiFeedback.detailedFeedback}`,
      },
    });

    return { interview: updatedInterview, feedback };
  });

  return result;
};

export const deleteInterviewService = async (interviewId: string) => {
  try {
    await prisma.interview.delete({
      where: {
        id: interviewId,
      },
    });
    return { success: true };
  } catch (error) {
    throw new Error("Interview not found or already deleted.");
  }
};

export const getAllInterviewsService = async () => {
  const interviews = await prisma.interview.findMany({
    include: {
      category: true, // Lấy kèm thông tin chi tiết của category
      _count: {
        select: { messages: true }, // Đếm tổng số tin nhắn đã trao đổi trong interview này
      },
    },
    orderBy: {
      createdAt: "desc", // Sắp xếp cuộc phỏng vấn mới nhất lên đầu
    },
  });

  return interviews;
};
