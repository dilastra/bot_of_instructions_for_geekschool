import { Markup } from "telegraf";
import { CustomContext } from "../../types";

function mainMenu(ctx: CustomContext) {
  return ctx.reply(
    "Ты вернулся в главное меню",
    Markup.keyboard([["Контакты 📒", "Инструкции 📃"]]).resize()
  );
}

export default mainMenu;
