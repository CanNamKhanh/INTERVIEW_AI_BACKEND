"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const validate_middleware_1 = require("../middlewares/validate.middleware");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const auth_schema_1 = require("../schemas/auth.schema");
const router = (0, express_1.Router)();
// POST /api/auth/register
router.post("/register", (0, validate_middleware_1.validate)(auth_schema_1.registerSchema), auth_controller_1.register);
// POST /api/auth/login
router.post("/login", (0, validate_middleware_1.validate)(auth_schema_1.loginSchema), auth_controller_1.login);
// POST /api/auth/logout  (cần token)
router.post("/logout", auth_middleware_1.authenticate, auth_controller_1.logout);
exports.default = router;
//# sourceMappingURL=auth.route.js.map