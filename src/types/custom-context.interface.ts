import { Context } from "telegraf";

interface CustomContext extends Context {
  session: {
    currentPageCourse: number;
    isLastPage: boolean;
  };
}

export default CustomContext;
