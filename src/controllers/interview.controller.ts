import { Request, Response } from "express";
import {
  createInterviewService,
  deleteInterviewService,
  endInterviewService,
} from "../services/interview.service";
import { AuthRequest } from "../middlewares/auth.middleware";

export interface InterviewRequest extends Request {
  userId?: string;
  interviewId?: string;
  token?: string;
  type?: string;
}

export const createInterview = async (
  req: InterviewRequest,
  res: Response,
): Promise<void> => {
  try {
    const result = await createInterviewService({
      ...req.body,
      userId: req.userId!,
    });
    res.status(201).json({
      success: true,
      message: "Create interview successfully",
      data: result,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Something went wrong";
    res.status(401).json({ success: false, message });
  }
};

export const endInterview = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
    const { interviewId } = req.body;

    if (!interviewId) {
      res.status(400).json({ success: false, message: "Missing interviewId" });
      return;
    }

    const result = await endInterviewService(interviewId);

    res.status(200).json({
      success: true,
      message: "Interview ended and feedback generated successfully",
      data: result,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Something went wrong";
    res.status(400).json({ success: false, message });
  }
};

export const deleteInterview = async (
  req: InterviewRequest,
  res: Response,
): Promise<void> => {
  try {
    const { interviewId } = req.body;
    const result = await deleteInterviewService(interviewId);
    res.status(200).json({
      success: true,
      message: "Delete interview successfully",
      data: result,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Something went wrong";
    res.status(400).json({ success: false, message });
  }
};
