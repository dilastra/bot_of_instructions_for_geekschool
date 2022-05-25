import { Markup } from "telegraf";
import { CustomContext } from "../../types";

function mainMenu(ctx: CustomContext) {
  return ctx.reply(
    "Ты в главное меню",
    Markup.keyboard([["Контакты 📒", "Инструкции 📃"]]).resize()
  );
}

export default mainMenu;
