import { Markup } from "telegraf";
import { CustomContext } from "../../types";

function contacts(ctx: CustomContext) {
  return ctx.reply(
    "Выбери, с кем ты хочешь связаться",
    Markup.keyboard([
      ["Технокуратор (Установка ПО) 🤖"],
      ["Техподдержка ☎"],
      ["Круглосуточная поддержка студентов 📞"],
      ["Вернуться в главное меню ↩️"],
    ]).resize()
  );
}

export default contacts;
