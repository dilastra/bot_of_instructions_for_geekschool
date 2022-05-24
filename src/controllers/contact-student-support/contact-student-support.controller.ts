import { CustomContext } from "../../types";

function contactStudentSupport(ctx: CustomContext) {
  return ctx.replyWithMarkdown(
    "Круглосуточная поддержка студентов: [+7 499 922-47-10](tel:+74999224710) "
  );
}

export default contactStudentSupport;
