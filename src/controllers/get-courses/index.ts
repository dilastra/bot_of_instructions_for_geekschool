import { Composer } from "telegraf";
import { CustomContext } from "../../types";
import getCoursess from "./get-courses.controller";

const coursesComposer = new Composer<CustomContext>();

coursesComposer.hears(
  ["Инструкции 📃", "Выбрать другую инструкцию"],
  getCoursess
);

coursesComposer.hears("Вперёд ⏩", (ctx) => {
  if (!ctx.session.isLastPage) {
    ctx.session.currentСoursePageNumber += 1;
  }
  return getCoursess(ctx);
});

coursesComposer.hears("⏪ Назад", (ctx) => {
  const currentСoursePageNumber = ctx.session.currentСoursePageNumber;
  if (currentСoursePageNumber > 0) {
    ctx.session.currentСoursePageNumber -= 1;
  }
  return getCoursess(ctx);
});

export default coursesComposer;
