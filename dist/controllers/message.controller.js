"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllMessages = exports.sendMessage = void 0;
const message_service_1 = require("../services/message.service");
// 1. Hàm xử lý gửi tin nhắn của User và nhận câu trả lời từ AI
const sendMessage = async (req, res) => {
    try {
        const { interviewId, content } = req.body;
        const result = await (0, message_service_1.sendMessageService)(interviewId, content);
        res.status(200).json({
            success: true,
            message: "Message exchanged successfully",
            data: result,
        });
    }
    catch (error) {
        console.log("❌ LỖI Ở CONTROLLER CATCH:", error);
        const message = error instanceof Error ? error.message : "Something went wrong";
        res.status(400).json({ success: false, message });
    }
};
exports.sendMessage = sendMessage;
// 2. Hàm xử lý lấy lại toàn bộ lịch sử tin nhắn của cuộc phỏng vấn này (Dành cho FE render lúc load trang)
const getAllMessages = async (req, // Lấy interviewId từ URL params (ví dụ: /messages/:interviewId)
res) => {
    try {
        const { interviewId } = req.params;
        if (!interviewId) {
            res.status(400).json({ success: false, message: "Missing interviewId" });
            return;
        }
        const messages = await (0, message_service_1.getAllMessagesService)(interviewId);
        res.status(200).json({
            success: true,
            message: "Get all messages successfully",
            data: messages,
        });
    }
    catch (error) {
        const message = error instanceof Error ? error.message : "Something went wrong";
        res.status(400).json({ success: false, message });
    }
};
exports.getAllMessages = getAllMessages;
//# sourceMappingURL=message.controller.js.map