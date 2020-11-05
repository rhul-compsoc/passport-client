import { combineReducers } from "redux";
import { authReducer } from "./auth";

const rootReducer = combineReducers({
  auth: authReducer,
});

type RootState = ReturnType<typeof rootReducer>;

export { rootReducer };
export type { RootState };
