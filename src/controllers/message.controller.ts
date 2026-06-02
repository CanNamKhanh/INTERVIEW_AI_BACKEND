import { Request, Response } from "express";
import {
  sendMessageService,
  getAllMessagesService,
} from "../services/message.service";
import { AuthRequest } from "../middlewares/auth.middleware";

// 1. Hàm xử lý gửi tin nhắn của User và nhận câu trả lời từ AI
export const sendMessage = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
    const { interviewId, content } = req.body;

    const result = await sendMessageService(interviewId, content);

    res.status(200).json({
      success: true,
      message: "Message exchanged successfully",
      data: result,
    });
  } catch (error) {
    console.log("❌ LỖI Ở CONTROLLER CATCH:", error);
    const message =
      error instanceof Error ? error.message : "Something went wrong";
    res.status(400).json({ success: false, message });
  }
};

// 2. Hàm xử lý lấy lại toàn bộ lịch sử tin nhắn của cuộc phỏng vấn này (Dành cho FE render lúc load trang)
export const getAllMessages = async (
  req: Request<{ interviewId: string }>, // Lấy interviewId từ URL params (ví dụ: /messages/:interviewId)
  res: Response,
): Promise<void> => {
  try {
    const { interviewId } = req.params;

    if (!interviewId) {
      res.status(400).json({ success: false, message: "Missing interviewId" });
      return;
    }

    const messages = await getAllMessagesService(interviewId);

    res.status(200).json({
      success: true,
      message: "Get all messages successfully",
      data: messages,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Something went wrong";
    res.status(400).json({ success: false, message });
  }
};
