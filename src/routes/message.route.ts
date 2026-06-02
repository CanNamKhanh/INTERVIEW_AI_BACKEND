import { Router } from "express";
import { sendMessage, getAllMessages } from "../controllers/message.controller";
import { validate } from "../middlewares/validate.middleware"; // Giả định bạn có middleware check Zod
import { sendMessageSchema } from "../schemas/message.schema";
import { authenticate } from "../middlewares/auth.middleware";

const router = Router();

// Route 1: Gửi tin nhắn (Dùng POST vì có Request Body truyền lên)
router.post("/send", authenticate, validate(sendMessageSchema), sendMessage);

// Route 2: Lấy lịch sử chat (Dùng GET và truyền ID qua URL params cho chuẩn RESTful API)
router.get("/:interviewId", authenticate, getAllMessages);

export default router;
