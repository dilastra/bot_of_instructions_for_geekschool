import { Composer } from "telegraf";
import { CustomContext } from "../../types";
import getInstructions from "./get-instructions.controller";

const getInstructionsComposer = new Composer<CustomContext>();

getInstructionsComposer.hears(
  ["Инструкции 📃", "Выбрать другую инструкцию 📃"],
  getInstructions
);

getInstructionsComposer.hears("Вперёд ⏩", (ctx) => {
  if (!ctx.session.isLastPage) {
    ctx.session.currentСoursePageNumber += 1;
  }
  return getInstructions(ctx);
});

getInstructionsComposer.hears("⏪ Назад", (ctx) => {
  const currentСoursePageNumber = ctx.session.currentСoursePageNumber;
  if (currentСoursePageNumber > 0) {
    ctx.session.currentСoursePageNumber -= 1;
  }
  return getInstructions(ctx);
});

export default getInstructionsComposer;
