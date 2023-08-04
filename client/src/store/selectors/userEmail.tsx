import userState, { userStateType } from "../atoms/user";
import { selector } from "recoil";

const userEmailState = selector<string | null>({
  key: "userEmailState",
  get: ({ get }) => {
    const state = get(userState) as userStateType;
    return state.userEmail;
  },
});

export default userEmailState;
