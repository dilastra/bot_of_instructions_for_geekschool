import { Composer } from "telegraf";
import { CustomContext } from "../../types";
import contacts from "./contacts.controller";

const contactsComposer = new Composer<CustomContext>();

contactsComposer.hears("Контакты 📒", contacts);

export default contactsComposer;
