import { combineReducers } from 'redux';

import isAuthReducer from './isAuthReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  isAuthReducer,
  userReducer,
});

export default rootReducer;
