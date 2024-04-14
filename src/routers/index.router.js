import { Router } from "express";
import { viewsRouter } from "./views/index.view.js";

export const indexRouter = Router();

indexRouter.use("/", viewsRouter)