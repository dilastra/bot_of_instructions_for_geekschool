import { Markup } from "telegraf";
import { courses } from "../../constants";
import { CustomContext } from "../../types";

function getCourses(ctx: CustomContext) {
  const currentPageCourse = ctx.session.currentPageCourse;

  const trainingsButton = courses.slice(
    currentPageCourse * 3,
    currentPageCourse * 3 + 3
  );

  if (trainingsButton.length < 3) {
    ctx.session.isLastPage = true;
  } else {
    ctx.session.isLastPage = false;
  }

  const bottomButtons = [];

  if (ctx.session.isLastPage) {
    bottomButtons.push("Назад");
  } else if (currentPageCourse > 0) {
    bottomButtons.push("Назад", "Вперёд");
  } else {
    bottomButtons.push("Вперёд");
  }

  return ctx.reply(
    "Привет",
    Markup.keyboard([
      ...trainingsButton.map((trainingButton) => {
        return [trainingButton];
      }),
      bottomButtons,
    ]).resize()
  );
}

export default getCourses;
