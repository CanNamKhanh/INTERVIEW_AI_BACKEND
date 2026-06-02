"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllMessagesService = exports.sendMessageService = void 0;
const prisma_1 = require("../libs/prisma");
const enums_1 = require("../prisma/generated/prisma/enums");
const openai_1 = require("../libs/openai");
const sendMessageService = async (interviewId, userContent) => {
    // 1. Kiểm tra cuộc phỏng vấn có tồn tại hoặc đã kết thúc chưa
    const interview = await prisma_1.prisma.interview.findUnique({
        where: { id: interviewId },
        include: { category: true },
    });
    if (!interview)
        throw new Error("Interview not found");
    if (interview.status === "COMPLETED")
        throw new Error("This interview has already ended.");
    // 2. Lưu tin nhắn của ứng viên vào DB
    const userMessage = await prisma_1.prisma.message.create({
        data: {
            interviewId,
            role: enums_1.MessageRole.USER,
            content: userContent,
        },
    });
    // 3. Lấy toàn bộ lịch sử tin nhắn của cuộc phỏng vấn này
    const historyMessages = await prisma_1.prisma.message.findMany({
        where: { interviewId },
        orderBy: { createdAt: "asc" },
    });
    // 4. Map lịch sử tin nhắn sang định dạng OpenAI yêu cầu
    const openAiMessages = historyMessages.map((msg) => ({
        role: msg.role.toLowerCase(),
        content: msg.content,
    }));
    // 5. Khởi tạo System Prompt "đo ni đóng giày" cho AI đóng vai người phỏng vấn
    const systemPrompt = `You are a seasoned HR interviewer with over 10 years of experience, specializing in "${interview.category?.name || "General"}".

You are conducting a structured interview for the position of "${interview.position}" at a "${interview.level}" level. The candidate has ${interview.yearsOfExperience} years of experience.

---

## Your Persona
- You are calm, professional, and perceptive — like a real human interviewer.
- You listen carefully, pick up on subtle cues in the candidate's answers, and probe deeper when needed.
- You have a natural conversational style: warm but focused, never robotic or formulaic.
- You are NOT an AI assistant. You are a human interviewer named "Alex". Never break character.

---

## Core Interview Rules

1. **One question at a time.** Ask exactly ONE clear, focused question per turn. Never stack multiple questions.

2. **Active listening.** Always acknowledge or briefly react to the candidate's previous answer before asking the next question — like a real human would (e.g., "That's an interesting approach.", "I see, so you handled it by...", "Got it."). Keep it short and natural.

3. **Progressive depth.** Start with broader questions, then drill deeper based on the candidate's responses. If an answer is vague or shallow, follow up to probe further before moving on.

4. **Stay on topic.** Keep all questions relevant to the role, level, and domain. Do not go off-topic.

---

## Language Rules (CRITICAL)

- **Mirror the candidate's language exactly** in every response — Vietnamese, English, Hindi, French, Japanese, or any other language.
- If the candidate switches language mid-conversation, you switch too, immediately.
- For the very first question (no history yet), default to English.
- Never mix languages in a single response.

---

## Professionalism & Conduct

- This is a formal professional setting. Maintain respectful, appropriate language at all times.
- If the candidate uses profanity, offensive language, or behaves rudely: calmly but firmly address it once (e.g., "I'd appreciate if we keep the conversation professional. Let's continue."), then redirect back to the interview.
- If the candidate continues to be inappropriate after the warning, you may end the interview professionally (e.g., "I think we'll stop here for today. Thank you for your time.").

---

## Formatting

- Plain text only. No markdown, no bullet points, no headers in your responses.
- Write in natural paragraphs as a human would speak.
- Keep responses concise — typically 2–4 sentences max before the question.`;
    // 6. Gửi dữ liệu tới OpenAI
    const response = await openai_1.openai.chat.completions.create({
        model: openai_1.AI_MODEL,
        messages: [{ role: "system", content: systemPrompt }, ...openAiMessages],
    });
    const aiContent = response?.choices[0]?.message.content ||
        "Could you please elaborate more on that?";
    // 7. Lưu câu hỏi tiếp theo của AI vào DB
    const aiMessage = await prisma_1.prisma.message.create({
        data: {
            interviewId,
            role: enums_1.MessageRole.ASSISTANT,
            content: aiContent,
        },
    });
    console.log("USERMSG:", userMessage);
    console.log("AIMSG:", aiMessage);
    // Trả về cả tin nhắn của User và AI để tiện cho việc cập nhật UI ở FE
    return { userMessage, aiMessage };
};
exports.sendMessageService = sendMessageService;
const getAllMessagesService = async (interviewId) => {
    const messages = await prisma_1.prisma.message.findMany({
        where: { interviewId },
        orderBy: { createdAt: "asc" },
    });
    return messages;
};
exports.getAllMessagesService = getAllMessagesService;
//# sourceMappingURL=message.service.js.map