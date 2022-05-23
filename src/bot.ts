import { Markup, Telegraf } from "telegraf";
import { courses } from "./constants";
const LocalSession = require("telegraf-session-local");
import controllersComposer from "./controllers";
import { CustomContext } from "./types";

const bot = new Telegraf<CustomContext>(process.env.ACCESS_TOKEN_BOT);

const localSession = new LocalSession({ database: "example_db.json" });

bot.use(localSession.middleware());

bot.start((ctx) =>
  ctx.reply(
    "Какой-то приветственный текст",
    Markup.keyboard(["Инструкции"]).resize()
  )
);

bot.on("text", (ctx: CustomContext, next) => {
  if (!ctx.session?.currentPageCourse) {
    ctx.session = {
      currentPageCourse: 0,
      isLastPage: false,
    };
  }
  return next();
});

bot.use(controllersComposer);

bot.launch();
