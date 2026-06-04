import { Router } from "express";
import {
  register,
  login,
  logout,
  refreshTokenController,
} from "../controllers/auth.controller";
import { validate } from "../middlewares/validate.middleware";
import { authenticate } from "../middlewares/auth.middleware";
import {
  loginSchema,
  refreshTokenSchema,
  registerSchema,
} from "../schemas/auth.schema";

const router = Router();

// POST /api/auth/register
router.post("/register", validate(registerSchema), register);

// POST /api/auth/login
router.post("/login", validate(loginSchema), login);

// POST /api/auth/logout  (cần token)
router.post("/logout", authenticate, logout);

// POST /api/auth/refresh-token (cần token)
router.post(
  "/refresh-token",
  validate(refreshTokenSchema),
  refreshTokenController,
);

export default router;
