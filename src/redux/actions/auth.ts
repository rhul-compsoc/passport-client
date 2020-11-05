import { ClientUser } from "../../entity/ClientUser";

enum AuthActions {
  AUTH_FETCH_REQUEST = 'AUTH_FETCH_REQUEST',
  AUTH_FETCH_FAILURE = 'AUTH_FETCH_FAILURE',
  AUTH_FETCH_SUCCESS = 'AUTH_FETCH_SUCCESS',
  AUTH_CLEAR = 'AUTH_CLEAR',
}

interface authFetchRequestType {
  type: AuthActions.AUTH_FETCH_REQUEST
}
const authFetchRequest = (): authFetchRequestType => {
  return {
    type: AuthActions.AUTH_FETCH_REQUEST
  }
}

interface authFetchFailureType {
  type: AuthActions.AUTH_FETCH_FAILURE,
  error: string
}
const authFetchFailure = (error: Error): authFetchFailureType => {
  return {
    type: AuthActions.AUTH_FETCH_FAILURE,
    error: error.stack || 'An unknown error occured.'
  }
}

interface authFetchSuccessType {
  type: AuthActions.AUTH_FETCH_SUCCESS,
  user?: ClientUser | null
}
const authFetchSuccess = (user?: ClientUser | null): authFetchSuccessType => {
  return {
    type: AuthActions.AUTH_FETCH_SUCCESS,
    user
  }
}

interface authClearType {
  type: AuthActions.AUTH_CLEAR,
}
const authClear = (): authClearType => {
  return {
    type: AuthActions.AUTH_CLEAR
  }
}

type authActionTypes = authFetchRequestType | authFetchFailureType | authFetchSuccessType | authClearType

export {
  AuthActions,
  authFetchRequest,
  authFetchFailure,
  authFetchSuccess,
  authClear,
};
export type {
  authActionTypes,
  authFetchFailureType,
  authFetchRequestType,
  authFetchSuccessType,
  authClearType,
};


