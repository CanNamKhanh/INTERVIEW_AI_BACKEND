"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.interviewSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const CATEGORIES = [
    "Information Technology & Software",
    "Business & Entrepreneurship",
    "Electrical & Electronics Engineering",
    "Marketing & Communications",
    "Finance & Accounting",
    "Human Resource Management",
    "Graphic Design & UI/UX",
    "Logistics & Supply Chain Management",
    "Healthcare & Medical Services",
    "Languages & Translation",
];
const TYPES = ["TECHNICAL", "BEHAVIORAL", "SYSTEM_DESIGN", "HR", "MIXED"];
exports.interviewSchema = zod_1.default.object({
    title: zod_1.default.string().min(1, { message: "Title can not be a blank" }),
    position: zod_1.default.string().min(1, { message: "Position can not be a blank" }),
    level: zod_1.default.string().min(1, { message: "Level can not be a blank" }),
    type: zod_1.default.enum(TYPES, {
        message: "Please select a valid interview type",
    }),
    yearsOfExperience: zod_1.default.number().int().min(0).max(6),
    category: zod_1.default.enum(CATEGORIES, {
        message: "Please select a valid industry category",
    }),
});
//# sourceMappingURL=interview.schema.js.map