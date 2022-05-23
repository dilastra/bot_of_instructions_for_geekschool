import { Composer } from "telegraf";
import { courses } from "../../constants";
import { CustomContext } from "../../types";
import selectPlatform from "./select-platform.controller";

const selectPlatformComposer = new Composer<CustomContext>();

selectPlatformComposer.hears(courses, selectPlatform);

export default selectPlatformComposer;
