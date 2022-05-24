import { Markup } from "telegraf";
import { instructions } from "../../constants";
import { CustomContext } from "../../types";

async function getInstruction(ctx: CustomContext) {
  if ("text" in ctx.message) {
    const selectedInstruction = instructions.find(
      (instruction) => instruction.id === ctx.session.idSelectedCourse
    );

    const selectedPlatformName = ctx.message.text;

    if (!selectedInstruction?.platforms) {
      const message = `Выбранная инструкция: <b>${selectedInstruction.name}</b>\n`;
      await ctx.replyWithHTML(message, {
        ...Markup.inlineKeyboard([
          Markup.button.url(
            "Инструкция",
            selectedInstruction.linkOnInstructions
          ),
        ]),
      });

      return await ctx.reply(
        "Чтобы выбрать другую инструкцию, нажми 'Выбрать другую инструкцию'",
        Markup.keyboard([
          "Выбрать другую инструкцию 📃",
          "Вернуться в главное меню ↩️",
        ]).resize()
      );
    }

    const selectedPlatform = selectedInstruction?.platforms.find(
      (platform) => platform.name === selectedPlatformName
    );

    const message =
      `Выбранный курс: <b>${selectedInstruction.name}</b>\n` +
      `Выбранная платформа: <b>${selectedPlatformName}</b>`;

    await ctx.replyWithHTML(message, {
      ...Markup.inlineKeyboard([
        Markup.button.url("Инструкция", selectedPlatform.linkOnInstruction),
      ]),
    });

    return await ctx.reply(
      "Чтобы выбрать другую инструкцию, нажми 'Выбрать другую инструкцию'",
      Markup.keyboard([
        "Выбрать другую инструкцию 📃",
        "Вернуться в главное меню ↩️",
      ]).resize()
    );
  }
}

export default getInstruction;
