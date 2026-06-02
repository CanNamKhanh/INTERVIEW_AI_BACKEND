"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMe = void 0;
const user_service_1 = require("../services/user.service");
const getMe = async (req, res) => {
    try {
        const result = await (0, user_service_1.getMeService)(req.userId);
        res.status(200).json({ success: true, data: result });
    }
    catch (error) {
        if (error instanceof Error && error.message === "User not found") {
            res.status(404).json({ success: false, message: error.message });
            return;
        }
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};
exports.getMe = getMe;
//# sourceMappingURL=user.controller.js.map