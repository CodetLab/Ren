import { Router } from "express";
import { askOllama } from "../service/llama.js";

const router = Router();

router.post("/v1", async (req, res) => {
  const { message } = req.body;

  if (!message || typeof message !== "string") {
    return res.status(400).json({
      error: "message is required",
    });
  }

  try {
    const response = await askOllama(message);

    return res.json({
      response,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "local model unavailable",
    });
  }
});

export default router;
