/* eslint-disable linebreak-style */
import actionTypes from '../actions/actionType';

const initialState = {
  login: [],
  loading: false,
  error: null,
  msg: null
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_START:
      return {
        ...state,
        loading: true,
        error: null
      };

    case actionTypes.LOGIN_FETCH_DATA:
      return {
        ...state,
        loading: false,
        loginInfo: action.payload.loginData

      };

    case actionTypes.LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        loginInfo: action.payload.error
      };

    default:
      return state;
  }
};

export default LoginReducer;
