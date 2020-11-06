import __SNOWPACK_ENV__ from '../../../__snowpack__/env.js';
import.meta.env = __SNOWPACK_ENV__;

import fetch from "../../../web_modules/isomorphic-fetch.js";
import {
  authFetchFailure,
  authFetchRequest,
  authFetchSuccess
} from "../actions/auth.js";
const getUserDetails = () => (dispatch) => {
  dispatch(authFetchRequest());
  fetch(import.meta.env.SNOWPACK_PUBLIC_API_URL + "/login/info", {credentials: "include"}).then((res) => res.json()).then((user) => dispatch(authFetchSuccess(user))).catch((err) => {
    console.log(err);
    dispatch(authFetchFailure(err));
  });
};
const removeUserDetails = () => (dispatch) => {
  dispatch(authFetchRequest());
  fetch(import.meta.env.SNOWPACK_PUBLIC_API_URL + "/login/logout", {credentials: "include"}).then(() => dispatch(authFetchSuccess(null))).catch((err) => {
    console.log(err);
    dispatch(authFetchFailure(err));
  });
};
export {getUserDetails, removeUserDetails};
