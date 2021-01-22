/* eslint-disable linebreak-style */
import { getPost, setLocalStorage } from 'src/helpers';
import actionTypes from './actionType';
/**
 * User info Begin Action
 */
export const loginStart = () => ({
  type: actionTypes.LOGIN_START
});

/**
 * User info Success Action
 */
export const loginSuccess = (loginData) => {
  return {
    type: actionTypes.LOGIN_FETCH_DATA,
    payload: { loginData }
  };
};

/**
 * User info Failure Action
 */
export const loginError = (error) => ({
  type: actionTypes.LOGIN_ERROR,
  payload: { error }
});

/**
 * User driver info
 */
export const login = (data) => {
  return (dispatch) => {
    dispatch(loginStart());
    return getPost('users/authenticate', data)
      .then((response) => {
        setLocalStorage({ _token: response.data.token, userDetails: response.data.user });
        return dispatch(loginSuccess(response));
      })
      .catch((error) => {
        return dispatch(loginError(error.response));
      });
  };
};
export const registration = (data) => {
  return (dispatch) => {
    dispatch(loginStart());
    return getPost('users/register', data)
      .then((response) => {
        return dispatch(loginSuccess(response));
      })
      .catch((error) => {
        return dispatch(loginError(error.response));
      });
  };
};
