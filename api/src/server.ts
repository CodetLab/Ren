import "dotenv/config";

import express from "express";
import cors from "cors";

import mainRouter from "./router/main.router.js";

const app = express();

const PORT = Number(process.env.PORT) || 3000;

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({
    status: "ok",
  });
});

app.use("/", mainRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
