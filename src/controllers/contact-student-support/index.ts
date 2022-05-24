import { Composer } from "telegraf";
import { CustomContext } from "../../types";
import contactStudentSupport from "./contact-student-support.controller";

const contactStudentSupportComposer = new Composer<CustomContext>();

contactStudentSupportComposer.hears(
  "Круглосуточная поддержка студентов 📞",
  contactStudentSupport
);

export default contactStudentSupportComposer;
