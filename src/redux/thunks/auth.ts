import fetch from "isomorphic-fetch";
import type { Action, Dispatch } from "redux";
import type { ThunkAction } from "redux-thunk";
import type { ClientUser } from "../../entity/ClientUser";
import {
  authFetchFailure,
  authFetchRequest,
  authFetchSuccess
} from "../actions/auth";
import type { RootState } from "../reducers";

const getUserDetails = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => (dispatch: Dispatch) => {
  dispatch(authFetchRequest());

  fetch(process.env.API_URL + "/login/info", { credentials: "include" })
    .then((res) => res.json())
    .then((user?: ClientUser) => dispatch(authFetchSuccess(user)))
    .catch((err) => {
      console.log(err);
      dispatch(authFetchFailure(err));
    });
};

const removeUserDetails = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => (dispatch: Dispatch) => {
  dispatch(authFetchRequest());

  fetch(process.env.API_URL + "/login/logout", { credentials: "include" })
    .then(() => dispatch(authFetchSuccess(null)))
    .catch((err) => {
      console.log(err);
      dispatch(authFetchFailure(err));
    });
};

export { getUserDetails, removeUserDetails };
