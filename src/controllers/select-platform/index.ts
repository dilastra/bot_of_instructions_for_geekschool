import { Composer } from "telegraf";
import { courses } from "../../constants";
import { CustomContext } from "../../types";
import selectPlatform from "./select-platform.controller";

const selectPlatformComposer = new Composer<CustomContext>();

selectPlatformComposer.hears(
  courses.map((course) => course.name),
  selectPlatform
);

export default selectPlatformComposer;
