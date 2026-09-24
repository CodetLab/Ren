const LLAMA_URL = process.env.LLAMA_URL ?? "http://127.0.0.1:8080";

export async function askLlama(message: string) {
  console.log("Sending request to:", LLAMA_URL);

  const response = await fetch(`${LLAMA_URL}/v1/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messages: [
        {
          role: "user",
          content: message,
        },
      ],
      temperature: 0.7,
      max_tokens: 512,
    }),
  });

  console.log("Status:", response.status);

  const data = await response.json();

  console.log("Response:", data);

  if (!response.ok) {
    throw new Error(`llama.cpp returned ${response.status}`);
  }

  return data.choices[0].message.content;
}
