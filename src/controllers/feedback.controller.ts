import { Request, Response } from "express";
import { getInterviewFeedbackService } from "../services/feedback.service";

export interface FeedbackRequest extends Request {
  interviewId?: string;
}

export const getInterviewFeedback = async (
  req: FeedbackRequest,
  res: Response,
): Promise<void> => {
  try {
    const { interviewId } = req.body;
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
