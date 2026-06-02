"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.login = exports.register = void 0;
const auth_service_1 = require("../services/auth.service");
const register = async (req, res) => {
    try {
        const result = await (0, auth_service_1.registerService)(req.body);
        res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: result,
        });
    }
    catch (error) {
        const message = error instanceof Error ? error.message : "Something went wrong";
        const statusCode = message === "Email already in use" ? 409 : 500;
        res.status(statusCode).json({ success: false, message });
    }
};
exports.register = register;
const login = async (req, res) => {
    try {
        const result = await (0, auth_service_1.loginService)(req.body);
        res.status(200).json({
            success: true,
            message: "Login successful",
            data: result,
        });
    }
    catch (error) {
        const message = error instanceof Error ? error.message : "Something went wrong";
        const statusCode = message === "Invalid email or password" ? 401 : 500;
        res.status(statusCode).json({ success: false, message });
    }
};
exports.login = login;
const logout = async (req, res) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            res.status(400).json({ success: false, message: "No token provided" });
            return;
        }
        await (0, auth_service_1.logoutService)(token);
        res.status(200).json({ success: true, message: "Logged out successfully" });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ success: false, message: error.message });
            return;
        }
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};
exports.logout = logout;
//# sourceMappingURL=auth.controller.js.map