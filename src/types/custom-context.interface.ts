import { Context } from "telegraf";

interface CustomContext extends Context {
  session: {
    currentСoursePageNumber: number;
    isLastPage: boolean;
    idSelectedCourse: number;
  };
}

export default CustomContext;
