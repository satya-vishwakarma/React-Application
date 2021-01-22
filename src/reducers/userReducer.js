/* eslint-disable linebreak-style */
import actionTypes from '../actions/actionType';

const initialState = {
  userInfo: [],
  loading: false,
  error: null,
  msg: null
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_START:
      return {
        ...state,
        loading: true,
        error: null
      };

    case actionTypes.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfo: action.payload.userData

      };

    case actionTypes.USER_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        userInfo: action.payload.error
      };

    default:
      return state;
  }
};

export default UserReducer;
