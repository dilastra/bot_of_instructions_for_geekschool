import { CustomContext } from "../../types";

function contactTechnicalSupport(ctx: CustomContext) {
  return ctx.replyWithHTML(
    "Почта: <b>support@geekbrains.ru</b>\n" +
      "Время работы: <b>ПН-ВС 10.00-22.00</b>"
  );
}

export default contactTechnicalSupport;
