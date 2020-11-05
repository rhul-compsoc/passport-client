import { ClientUser } from "../../entity/ClientUser";
import { AuthActions, authActionTypes } from "../actions/auth";

interface AuthState {
  isFetching: boolean;
  user: ClientUser | null;
  error: string | null;
}

const authReducer = (
  state: AuthState = {
    isFetching: false,
    user: null,
    error: null,
  },
  action: authActionTypes
): AuthState => {
  switch (action.type) {
    case AuthActions.AUTH_FETCH_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case AuthActions.AUTH_FETCH_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error,
      });
    case AuthActions.AUTH_FETCH_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        user: action.user,
      });
    default:
      return state;
  }
};

export { authReducer };
