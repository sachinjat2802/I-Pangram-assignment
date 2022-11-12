import { Router } from "express";
import {verifyTokenMentor,} from "../../utils/jwt/currentUser.js";
import {projectController} from "./controller.js"
export const projectRouter = Router();

projectRouter.post('/createProject',verifyTokenMentor, projectController.createProject);
//type user type employee or mentor
projectRouter.get('/getProjects/:type',projectController.getProjects);
projectRouter.get('/getProjects',projectController.getAllProjects);
projectRouter.put("/updateProject/:id",verifyTokenMentor,projectController.updateProject);
projectRouter.delete("/deleteProject/:id",verifyTokenMentor,projectController.deleteProject);


