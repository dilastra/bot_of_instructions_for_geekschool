import { Composer } from "telegraf";
import { CustomContext } from "../../types";
import contactTechnicalCurator from "./contact-technical-curator.controller";

const contactTechnicalCuratorComposer = new Composer<CustomContext>();

contactTechnicalCuratorComposer.hears(
  "Технокуратор (Установка ПО) 🤖",
  contactTechnicalCurator
);

export default contactTechnicalCuratorComposer;
