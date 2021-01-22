/* eslint-disable linebreak-style */
import { getPost, setLocalStorage } from 'src/helpers';
import actionTypes from './actionType';
/**
 * User info Begin Action
 */
export const userStart = () => ({
  type: actionTypes.USER_START
});

/**
 * User info Success Action
 */
export const userSuccess = (userData) => {
  return {
    type: actionTypes.FETCH_SUCCESS,
    payload: { userData }
  };
};

/**
 * User info Failure Action
 */
export const userError = (error) => ({
  type: actionTypes.USER_ERROR,
  payload: { error }
});

/**
 * User driver info
 */
export const login = (data) => {
  return (dispatch) => {
    dispatch(userStart());
    return getPost('users/authenticate', data)
      .then((response) => {
        setLocalStorage('_token', response.data.token);
        return dispatch(userSuccess(response));
      })
      .catch((error) => {
        return dispatch(userError(error.response));
      });
  };
};
export const registration = (data) => {
  return (dispatch) => {
    dispatch(userStart());
    return getPost('users/register', data)
      .then((response) => {
        return dispatch(userSuccess(response));
      })
      .catch((error) => {
        return dispatch(userError(error.response));
      });
  };
};
