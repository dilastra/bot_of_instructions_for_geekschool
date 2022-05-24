import { Markup, Telegraf } from "telegraf";
const LocalSession = require("telegraf-session-local");
import controllersComposer from "./controllers";
import { CustomContext } from "./types";

const bot = new Telegraf<CustomContext>(process.env.ACCESS_TOKEN_BOT);

const localSession = new LocalSession({ database: "example_db.json" });

bot.use(localSession.middleware());

bot.start((ctx) =>
  ctx.reply(
    "Какой-то приветственный текст",
    Markup.keyboard(["Инструкции 📃"]).resize()
  )
);

bot.on("text", (ctx: CustomContext, next) => {
  if (Object.keys(ctx.session).length === 0) {
    ctx.session = {
      currentСoursePageNumber: 0,
      isLastPage: false,
      idSelectedCourse: null,
    };
  }
  return next();
});

bot.use(controllersComposer);

bot.launch();
