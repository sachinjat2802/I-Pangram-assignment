import { Router } from "express";
export const userRouter = Router();
import{usersController} from "./controller.js"

userRouter.post('/signUp',usersController.signUp)
userRouter.post('/login',usersController.login)
