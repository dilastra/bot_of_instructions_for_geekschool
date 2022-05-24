import { Composer } from "telegraf";
import { CustomContext } from "../../types";
import contactTechnicalSupport from "./contact-technical-support.controller";

const contactTechnicalSupportComposer = new Composer<CustomContext>();

contactTechnicalSupportComposer.hears(
  "Техподдержка ☎",
  contactTechnicalSupport
);

export default contactTechnicalSupportComposer;
