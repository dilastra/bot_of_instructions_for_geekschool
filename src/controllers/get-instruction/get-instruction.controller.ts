import { Markup } from "telegraf";
import { courses } from "../../constants";
import { CustomContext } from "../../types";

function getInstruction(ctx: CustomContext) {
  if ("text" in ctx.message) {
    const selectedCourse = courses.find(
      (course) => course.id === ctx.session.idSelectedCourse
    );

    console.log(selectedCourse);

    const platform = ctx.message.text;

    const instruction = selectedCourse.instructions.find(
      (instruction) => instruction.platform === platform
    );

    const message =
      `Выбранный курс: <b>${selectedCourse.name}</b>\n` +
      `Выбранная платформа: <b>${platform}</b>`;

    ctx.replyWithHTML(message, {
      ...Markup.inlineKeyboard([
        Markup.button.url("Инструкция", instruction.link),
      ]),
    });

    ctx.reply(
      "Чтобы выбрать другую инструкцию, нажми 'Выбрать другую инструкцию'",
      Markup.keyboard(["Выбрать другую инструкцию"]).resize()
    );
  }
}

export default getInstruction;
