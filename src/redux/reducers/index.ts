import { combineReducers } from "redux";
import { authReducer, AuthState } from "./auth";

const rootReducer = combineReducers({
  auth: authReducer,
});

type RootState = {
  auth: AuthState
}

export { rootReducer };
export type { RootState };
