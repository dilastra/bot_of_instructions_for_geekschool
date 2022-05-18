import { Telegraf } from "telegraf";

const bot = new Telegraf(process.env.ACCESS_TOKEN_BOT);

bot.start((ctx) => ctx.reply("Привет"));

bot.launch();
