var AuthActions;
(function(AuthActions2) {
  AuthActions2["AUTH_FETCH_REQUEST"] = "AUTH_FETCH_REQUEST";
  AuthActions2["AUTH_FETCH_FAILURE"] = "AUTH_FETCH_FAILURE";
  AuthActions2["AUTH_FETCH_SUCCESS"] = "AUTH_FETCH_SUCCESS";
  AuthActions2["AUTH_CLEAR"] = "AUTH_CLEAR";
})(AuthActions || (AuthActions = {}));
const authFetchRequest = () => {
  return {
    type: AuthActions.AUTH_FETCH_REQUEST
  };
};
const authFetchFailure = (error) => {
  return {
    type: AuthActions.AUTH_FETCH_FAILURE,
    error: error.stack || "An unknown error occured."
  };
};
const authFetchSuccess = (user) => {
  return {
    type: AuthActions.AUTH_FETCH_SUCCESS,
    user
  };
};
const authClear = () => {
  return {
    type: AuthActions.AUTH_CLEAR
  };
};
export {
  AuthActions,
  authFetchRequest,
  authFetchFailure,
  authFetchSuccess,
  authClear
};
