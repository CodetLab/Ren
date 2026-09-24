import express from "express";
const r = express.Router();

import chatRouter from "./chat.router.js";

r.use("/chat", chatRouter);

export default r
