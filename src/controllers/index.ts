import { Composer } from "telegraf";
import coursesComposer from "./get-courses";
import getInstructionComposer from "./get-instruction";
import selectPlatformComposer from "./select-platform";

const controllersComposer = Composer.compose([
  coursesComposer,
  getInstructionComposer,
  selectPlatformComposer,
]);

export default controllersComposer;
