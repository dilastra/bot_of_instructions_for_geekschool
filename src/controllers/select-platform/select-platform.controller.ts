import { Markup } from "telegraf";
import { CustomContext } from "../../types";

function selectPlatform(ctx: CustomContext) {
  return ctx.reply(
    "Выберите платформу",
    Markup.keyboard(["Windows", "MacOS"]).resize()
  );
}

export default selectPlatform;
