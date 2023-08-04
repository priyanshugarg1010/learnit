import { selector } from "recoil";
import courseState from "../atoms/course";

export const isCourseLoading = selector({
  key: "isCourseLoading",
  get: ({ get }) => {
    const state = get(courseState);
    return state.isLoading;
  },
});

export const courseDetails = selector({
  key: "courseDetailsState",
  get: ({ get }) => {
    const state = get(courseState);
    return state.course;
  },
});

export const courseTitle = selector<string | null>({
  key: "courseTitleState",
  get: ({ get }) => {
    const state = get(courseState);
    if (courseState) {
      return state.course?.title ?? null;
    }
    return "";
  },
});

export const coursePrice = selector({
  key: "coursePriceState",
  get: ({ get }) => {
    const state = get(courseState);
    if (courseState) {
      return state.course?.price;
    }
    return "";
  },
});

export const courseImage = selector({
  key: "courseImageState",
  get: ({ get }) => {
    const state = get(courseState);
    if (courseState) {
      return state.course?.imageLink;
    }
    return "";
  },
});
