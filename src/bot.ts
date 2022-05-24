import { Markup, Telegraf } from "telegraf";
import { helloStickersId } from "./constants";
const LocalSession = require("telegraf-session-local");
import controllersComposer from "./controllers";
import { CustomContext } from "./types";

const bot = new Telegraf<CustomContext>(process.env.ACCESS_TOKEN_BOT);

const localSession = new LocalSession({ database: "example_db.json" });

bot.use(localSession.middleware());

bot.start(async (ctx) => {
  const randomNumber = Math.floor(Math.random() * (9 + 1));
  const randomHelloStickers = helloStickersId[randomNumber];
  await ctx.replyWithSticker(randomHelloStickers);
  await ctx.reply(
    "Привет!👋\n" +
      "Я- бот🤖, который хранит все инструкции и знает важные контактные данные!\n" +
      "Для лёгкого взаимодействия со мной, внизу⬇️ есть клавиатура",
    Markup.keyboard([["Контакты 📒", "Инструкции 📃"]]).resize()
  );
});

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

bot.on("sticker", (ctx) => {
  console.log(ctx.message);
});

bot.use(controllersComposer);

bot.launch();
