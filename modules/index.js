import { Router } from "express";
import { technologyrouter } from "./tehcnologies/router.js";
import {userRouter} from "./users/router.js";
import { projectRouter } from "./project/router.js";
import {taskRouter} from "./tasks/router.js";
const router = Router();
router.use("/auth", userRouter);
router.use("/technology",technologyrouter);
router.use("/project",projectRouter);
router.use("/tasks",taskRouter);


export default router;
