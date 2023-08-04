import { atom } from "recoil";

export interface coursetype {
  _id: string;
  title: string;
  description: string;
  price: number;
  imageLink: string;
  published: boolean;
}

export interface courseStateType {
  isLoading: boolean;
  course: coursetype | null;
}

const courseState = atom<courseStateType>({
  key: "courseState",
  default: {
    isLoading: true,
    course: null,
  },
});
export default courseState;
