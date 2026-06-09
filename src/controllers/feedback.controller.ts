import { Request, Response } from "express";
import { getInterviewFeedbackService } from "../services/feedback.service";

export const getInterviewFeedback = async (
  req: Request<{ interviewId: string }>,
  res: Response,
): Promise<void> => {
  try {
    const { interviewId } = req.params;

    if (!interviewId) {
      res.status(400).json({ success: false, message: "Missing interviewId" });
      return;
    }

    const feedback = await getInterviewFeedbackService(interviewId);
    res.status(200).json({
      success: true,
      message: "Get feedback successfully",
      data: feedback,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Something went wrong";
    res.status(400).json({ success: false, message });
  }
};
