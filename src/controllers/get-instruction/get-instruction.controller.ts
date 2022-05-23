import { Markup } from "telegraf";
import { CustomContext } from "../../types";

function getInstruction(ctx: CustomContext) {
  ctx.reply(
    "Такая-то инструкция",
    Markup.inlineKeyboard([
      Markup.button.url("Инструкция", "https://telegra.ph/dasdasd-08-02-2"),
    ])
  );
}

export default getInstruction;
