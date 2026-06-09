import { Router } from "express";
import { authenticate } from "../middlewares/auth.middleware";
import { getInterviewFeedback } from "../controllers/feedback.controller";

const router = Router();

router.get("/:interviewId", authenticate, getInterviewFeedback);

export default router;
