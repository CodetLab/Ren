import express from "express"; 

import { askController } from "../controller/chat.controller.js";

const r = express.Router();


r.post("/ask", askController);
//r.get("/response/:id");


export default r;
