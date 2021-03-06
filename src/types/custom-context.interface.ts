import { Context } from "telegraf";

interface CustomContext extends Context {
  session: {
    current–°oursePageNumber: number;
    isLastPage: boolean;
    idSelectedCourse: number;
  };
}

export default CustomContext;
