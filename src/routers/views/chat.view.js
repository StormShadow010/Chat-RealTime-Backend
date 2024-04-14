import { Router } from "express";
export const chatRouter = Router()

chatRouter.get("/", async (req, res, next) => {
    try {
        return res.render("chat", { title: "Chat Storm" })
    } catch (error) {
        return next(error);
    }
})
