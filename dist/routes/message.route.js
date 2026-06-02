"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const message_controller_1 = require("../controllers/message.controller");
const validate_middleware_1 = require("../middlewares/validate.middleware"); // Giả định bạn có middleware check Zod
const message_schema_1 = require("../schemas/message.schema");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const router = (0, express_1.Router)();
// Route 1: Gửi tin nhắn (Dùng POST vì có Request Body truyền lên)
router.post("/send", auth_middleware_1.authenticate, (0, validate_middleware_1.validate)(message_schema_1.sendMessageSchema), message_controller_1.sendMessage);
// Route 2: Lấy lịch sử chat (Dùng GET và truyền ID qua URL params cho chuẩn RESTful API)
router.get("/:interviewId", auth_middleware_1.authenticate, message_controller_1.getAllMessages);
exports.default = router;
//# sourceMappingURL=message.route.js.map