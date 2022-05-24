import { Composer } from "telegraf";
import { CustomContext } from "../../types";
import mainMenu from "./main-menu.controller";

const mainMenuComposer = new Composer<CustomContext>();

mainMenuComposer.hears("Вернуться в главное меню ↩️", mainMenu);

export default mainMenuComposer;
