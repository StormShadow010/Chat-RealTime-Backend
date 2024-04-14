import { Router } from "express";
import { chatRouter } from "./chat.view.js";

export const viewsRouter = Router();

viewsRouter.use("/", chatRouter);