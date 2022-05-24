import { Composer } from "telegraf";
import contactStudentSupportComposer from "./contact-student-support";
import contactTechnicalCuratorComposer from "./contact-technical-curator";
import contactTechnicalSupportComposer from "./contact-technical-support";
import contactsComposer from "./contacts";
import getInstructionComposer from "./get-instruction";
import getInstructionsComposer from "./get-instructions";
import mainMenuComposer from "./main-menu";
import selectPlatformComposer from "./select-platform";

const controllersComposer = Composer.compose([
  contactStudentSupportComposer,
  contactTechnicalCuratorComposer,
  contactTechnicalSupportComposer,
  contactsComposer,
  getInstructionComposer,
  getInstructionsComposer,
  mainMenuComposer,
  selectPlatformComposer,
]);

export default controllersComposer;
