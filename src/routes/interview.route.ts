import { Router } from "express";
import { authenticate } from "../middlewares/auth.middleware";
import { validate } from "../middlewares/validate.middleware";
import { interviewSchema } from "../schemas/interview.schema";
import {
  createInterview,
  deleteInterview,
  endInterview,
  getAllInterviews,
} from "../controllers/interview.controller";

const router = Router();

// GET /api/interview/all
router.get("/all", authenticate, getAllInterviews);

// POST /api/interview/create
router.post(
  "/create",
  authenticate,
  validate(interviewSchema),
  createInterview,
);

// TOP /api/interview/end
router.post("/end", authenticate, endInterview);

// DELETE /api/interview/delete
router.delete("/delete", authenticate, deleteInterview);

export default router;
