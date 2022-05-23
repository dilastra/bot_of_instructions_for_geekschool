import { Markup } from "telegraf";
import { courses } from "../../constants";
import { CustomContext } from "../../types";

function selectPlatform(ctx: CustomContext) {
  const findedCourse = courses.find((course) => {
    if ("text" in ctx.message) {
      return course.name === ctx.message.text;
    }

    return false;
  });

  ctx.session = {
    ...ctx.session,
    idSelectedCourse: findedCourse.id,
  };

  console.log(ctx.session);

  return ctx.reply(
    "Выберите платформу",
    Markup.keyboard(
      findedCourse.instructions.map((instruction) => instruction.platform)
    ).resize()
  );
}

export default selectPlatform;
