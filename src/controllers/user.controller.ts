import { Request, Response } from "express";
import { AuthRequest } from "../middlewares/auth.middleware";
import { getMeService } from "../services/user.service";

export const getMe = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const result = await getMeService(req.userId!);
    res.status(200).json({ success: true, data: result });
  } catch (error: unknown) {
    if (error instanceof Error && error.message === "User not found") {
      res.status(404).json({ success: false, message: error.message });
      return;
    }
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
