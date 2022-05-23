import { Composer } from "telegraf";
import { CustomContext } from "../../types";
import getInstruction from "./get-instruction.controller";

const getInstructionComposer = new Composer<CustomContext>();

getInstructionComposer.hears(["Windows", "MacOS"], getInstruction);

export default getInstructionComposer;
