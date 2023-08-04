import userState, { userStateType } from "../atoms/user";
import { selector } from "recoil";

const isUserLoading = selector<boolean>({
  key: "userLoadingState",
  get: ({ get }) => {
    const state = get(userState) as userStateType;

    return state.isLoading;
  },
});
export default isUserLoading;
