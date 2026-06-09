import { prisma } from "../libs/prisma";

export const getInterviewFeedbackService = async (interviewId: string) => {
  const feedback = await prisma.feedback.findUnique({
    where: { interviewId },
  });

  return feedback;
};
