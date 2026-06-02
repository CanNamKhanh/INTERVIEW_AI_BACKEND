"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteInterview = exports.endInterview = exports.createInterview = void 0;
const interview_service_1 = require("../services/interview.service");
const createInterview = async (req, res) => {
    try {
        const result = await (0, interview_service_1.createInterviewService)({
            ...req.body,
            userId: req.userId,
        });
        res.status(201).json({
            success: true,
            message: "Create interview successfully",
            data: result,
        });
    }
    catch (error) {
        const message = error instanceof Error ? error.message : "Something went wrong";
        res.status(401).json({ success: false, message });
    }
};
exports.createInterview = createInterview;
const endInterview = async (req, res) => {
    try {
        const { interviewId } = req.body;
        if (!interviewId) {
            res.status(400).json({ success: false, message: "Missing interviewId" });
            return;
        }
        const result = await (0, interview_service_1.endInterviewService)(interviewId);
        res.status(200).json({
            success: true,
            message: "Interview ended and feedback generated successfully",
            data: result,
        });
    }
    catch (error) {
        const message = error instanceof Error ? error.message : "Something went wrong";
        res.status(400).json({ success: false, message });
    }
};
exports.endInterview = endInterview;
const deleteInterview = async (req, res) => {
    try {
        const { interviewId } = req.body;
        const result = await (0, interview_service_1.deleteInterviewService)(interviewId);
        res.status(200).json({
            success: true,
            message: "Delete interview successfully",
            data: result,
        });
    }
    catch (error) {
        const message = error instanceof Error ? error.message : "Something went wrong";
        res.status(400).json({ success: false, message });
    }
};
exports.deleteInterview = deleteInterview;
//# sourceMappingURL=interview.controller.js.map