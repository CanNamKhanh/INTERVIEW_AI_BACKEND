import { Router } from "express";
import { authenticate } from "../middlewares/auth.middleware";
import { validate } from "../middlewares/validate.middleware";
import { interviewSchema } from "../schemas/interview.schema";
import {
  createInterview,
  deleteInterview,
  endInterview,
} from "../controllers/interview.controller";

const router = Router();

// POST /api/interview
router.post(
  "/create",
  authenticate,
  validate(interviewSchema),
  createInterview,
);

// TOP /api/interview/stop
router.post("/end", authenticate, endInterview);

// DELETE /api/interview
router.delete("/delete", authenticate, deleteInterview);

export default router;
