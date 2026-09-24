import { Router } from "express";
import { askLlama } from "../service/llama.ts";

const router = Router();

router.post("/v1/chat", async (req, res) => {
  const { message } = req.body;

  if (!message || typeof message !== "string") {
    return res.status(400).json({
      error: "message is required",
    });
  }

  try {
    const response = await askLlama(message);

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
