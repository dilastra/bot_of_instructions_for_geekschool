import { Composer } from "telegraf";
import { instructions } from "../../constants";
import { CustomContext } from "../../types";
import selectPlatform from "./select-platform.controller";

const selectPlatformComposer = new Composer<CustomContext>();
selectPlatformComposer.hears(
  instructions.map((instruction) => instruction.name),
  selectPlatform
);

export default selectPlatformComposer;
