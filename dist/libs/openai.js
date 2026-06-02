"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AI_MODEL = exports.openai = void 0;
const openai_1 = __importDefault(require("openai"));
exports.openai = new openai_1.default({
    //   apiKey: process.env.OPENAI_API_KEY,
    apiKey: process.env.OPENROUTER_API_KEY,
    baseURL: "https://openrouter.ai/api/v1",
});
exports.AI_MODEL = "gpt-4o-mini";
//# sourceMappingURL=openai.js.map