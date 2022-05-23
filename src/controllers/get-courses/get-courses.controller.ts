import { Markup } from "telegraf";
import { courses } from "../../constants";
import { CustomContext } from "../../types";

function getCourses(ctx: CustomContext) {
  if ("text" in ctx.message) {
    const currentСoursePageNumber = ctx.session.currentСoursePageNumber;

    const currentСoursePage = courses.slice(
      currentСoursePageNumber * 3,
      currentСoursePageNumber * 3 + 3
    );

    const nextStartСoursePageNumber = currentСoursePageNumber * 3 + 3;
    const nextEndСoursePageNumber = currentСoursePageNumber * 3 + 6;

    ctx.session.isLastPage =
      courses.slice(nextStartСoursePageNumber, nextEndСoursePageNumber)
        .length === 0;

    const bottomButtons = [];
    if (courses.length > 3) {
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
        ? "Выбери курс, для которого тебе необходима инструкция"
        : `Страница ${currentСoursePageNumber + 1} из ${Math.ceil(
            courses.length / 3
          )}`;

    return ctx.reply(
      message,
      Markup.keyboard([
        ...currentСoursePage.map((course) => {
          return [course.name];
        }),
        bottomButtons,
      ]).resize()
    );
  }
}

export default getCourses;
