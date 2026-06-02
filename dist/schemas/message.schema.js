"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessageSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.sendMessageSchema = zod_1.default.object({
    interviewId: zod_1.default.string().uuid({ message: "Invalid interview ID format" }),
    content: zod_1.default.string().min(1, { message: "Message cannot be empty" }),
});
//# sourceMappingURL=message.schema.js.map