require("dotenv").config();

const { Telegraf } = require("telegraf");

const bot = new Telegraf(process.env.TELEGRAM_BOT_API);

bot.start((ctx) => {
    ctx.reply("hi");
});

bot.help((ctx) => {
    ctx.reply("Comandos disponibles:\n/start\n/help");
});

bot.on("text", async (ctx) => {
  const response = await fetch("http://localhost:3000/chat/ask", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      question: ctx.message.text
    })
  });

  const data = await response.json();

  ctx.reply(data.msg);

  console.log("user:", ctx.message.text)
  console.log("model:", data.msg)
});


bot.launch();

console.log("Bot iniciado...");
