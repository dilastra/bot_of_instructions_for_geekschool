import { Markup } from "telegraf";
import { CustomContext } from "../../types";

function contactTechnicalCurator(ctx: CustomContext) {
  return ctx.replyWithHTML(
    "Почта: <b>t.cheredova@geekbrains.ru</b>\n" +
      "Время работы: <b>ПН-ПТ 10.00-19.00</b>",
    Markup.inlineKeyboard([
      Markup.button.url("Написать в Telegram", "https://t.me/tatyana_help_GB"),
    ])
  );
}

export default contactTechnicalCurator;
