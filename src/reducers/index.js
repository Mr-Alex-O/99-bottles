import { combineReducers } from 'redux';
import getBeer from './getBeer';

const rootReducer = combineReducers({
  beer: getBeer
});

export default rootReducer;
