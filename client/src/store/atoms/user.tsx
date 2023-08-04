import { atom } from "recoil";

export interface userStateType {
  isLoading: boolean;
  userEmail: string | null;
}

const userState = atom<userStateType>({
  key: "userState",
  default: {
    isLoading: true,
    userEmail: null,
  },
});

export default userState;
