import { combineReducers } from 'redux';
import LoginReducer from './loginReducer';
import UserReducer from './userReducer';

export default combineReducers({ LoginReducer, UserReducer });
