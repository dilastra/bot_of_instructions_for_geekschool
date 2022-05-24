import { Markup } from "telegraf";
import { instructions } from "../../constants";
import { CustomContext } from "../../types";
import getInstruction from "../get-instruction/get-instruction.controller";

async function selectPlatform(ctx: CustomContext) {
  const findedInstruction = instructions.find((instruction) => {
    if ("text" in ctx.message) {
      return instruction.name === ctx.message.text;
    }

    return false;
  });

  ctx.session = {
    ...ctx.session,
    idSelectedCourse: findedInstruction.id,
  };

  if (!findedInstruction?.platforms) {
    return await getInstruction(ctx);
  }

  return await ctx.reply(
    "Выберите платформу",
    Markup.keyboard([
      findedInstruction.platforms.map((instruction) => instruction.name),
      ["Вернуться в главное меню ↩️"],
    ]).resize()
  );
}

export default selectPlatform;
