import {combineReducers} from "../../../web_modules/redux.js";
import {authReducer} from "./auth.js";
const rootReducer = combineReducers({
  auth: authReducer
});
export {rootReducer};
