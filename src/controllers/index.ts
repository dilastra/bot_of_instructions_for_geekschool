import { Composer } from "telegraf";
import coursesComposer from "./get-courses";

const controllersComposer = Composer.compose([coursesComposer]);

export default controllersComposer;
