import { Markup } from "telegraf";
import { instructions } from "../../constants";
import { CustomContext } from "../../types";

function getInstructions(ctx: CustomContext) {
  if ("text" in ctx.message) {
    const currentСoursePageNumber = ctx.session.currentСoursePageNumber;

    const currentInstructionPage = instructions.slice(
      currentСoursePageNumber * 3,
      currentСoursePageNumber * 3 + 3
    );

    const nextStartСoursePageNumber = currentСoursePageNumber * 3 + 3;
    const nextEndСoursePageNumber = currentСoursePageNumber * 3 + 6;

    ctx.session = {
      ...ctx.session,
      isLastPage:
        instructions.slice(nextStartСoursePageNumber, nextEndСoursePageNumber)
          .length === 0,
    };

    const bottomButtons = [];
    if (instructions.length > 3) {
      if (ctx.session.isLastPage) {
        bottomButtons.push("⏪ Назад");
      } else if (currentСoursePageNumber > 0) {
        bottomButtons.push("⏪ Назад", "Вперёд ⏩");
      } else {
        bottomButtons.push("Вперёд ⏩");
      }
    }

    const message =
      ctx.message.text !== "Вперёд ⏩" && ctx.message.text !== "⏪ Назад"
        ? "Выбери курс или инструкцию"
        : `Страница ${currentСoursePageNumber + 1} из ${Math.ceil(
            instructions.length / 3
          )}`;

    return ctx.reply(
      message,
      Markup.keyboard([
        ...currentInstructionPage.map((instruction) => {
          return [instruction.name];
        }),
        bottomButtons,
        ["Вернуться в главное меню ↩️"],
      ]).resize()
    );
  }
}

export default getInstructions;
