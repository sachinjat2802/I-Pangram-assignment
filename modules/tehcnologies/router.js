import { Router } from "express";
import{tehcnologiesController} from "./controller.js"
export const technologyrouter = Router();

technologyrouter.post('/addTechnology',tehcnologiesController.addTechnology);
