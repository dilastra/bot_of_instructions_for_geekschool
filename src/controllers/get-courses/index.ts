import { Composer } from "telegraf";
import { CustomContext } from "../../types";
import getCoursess from "./get-courses.controller";

const coursesComposer = new Composer<CustomContext>();

coursesComposer.hears("Инструкции", getCoursess);
coursesComposer.hears("Вперёд", (ctx) => {
  if (!ctx.session.isLastPage) {
    ctx.session.currentPageCourse += 1;
  }
  return getCoursess(ctx);
});
coursesComposer.hears("Назад", (ctx) => {
  const currentPageCourse = ctx.session.currentPageCourse;
  if (currentPageCourse > 0) {
    ctx.session.currentPageCourse -= 1;
  }
  return getCoursess(ctx);
});

export default coursesComposer;
