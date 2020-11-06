import {AuthActions} from "../actions/auth.js";
const authReducer = (state = {
  isFetching: false,
  user: null,
  error: null
}, action) => {
  switch (action.type) {
    case AuthActions.AUTH_FETCH_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case AuthActions.AUTH_FETCH_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error
      });
    case AuthActions.AUTH_FETCH_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        user: action.user
      });
    default:
      return state;
  }
};
export {authReducer};
