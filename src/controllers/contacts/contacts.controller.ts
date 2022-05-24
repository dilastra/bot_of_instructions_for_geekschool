import { Markup } from "telegraf";
import { CustomContext } from "../../types";

function contacts(ctx: CustomContext) {
  return ctx.reply(
    "Выбери, над кем начать издеваться",
    Markup.keyboard([
      ["Технокуратор (Установка ПО) 🤖"],
      ["Техподдержка ☎"],
      ["Круглосуточная поддержка студентов 📞"],
      ["Вернуться в главное меню ↩️"],
    ]).resize()
  );
}

export default contacts;
