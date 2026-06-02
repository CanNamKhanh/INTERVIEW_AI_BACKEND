"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const validate_middleware_1 = require("../middlewares/validate.middleware");
const interview_schema_1 = require("../schemas/interview.schema");
const interview_controller_1 = require("../controllers/interview.controller");
const router = (0, express_1.Router)();
// POST /api/interview
router.post("/create", auth_middleware_1.authenticate, (0, validate_middleware_1.validate)(interview_schema_1.interviewSchema), interview_controller_1.createInterview);
// TOP /api/interview/stop
router.post("/end", auth_middleware_1.authenticate, interview_controller_1.endInterview);
// DELETE /api/interview
router.delete("/delete", auth_middleware_1.authenticate, interview_controller_1.deleteInterview);
exports.default = router;
//# sourceMappingURL=interview.route.js.map