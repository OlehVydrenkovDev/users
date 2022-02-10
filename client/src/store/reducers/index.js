import { combineReducers } from 'redux';

import isAuthReducer from './isAuthReducer';
import userReducer from './userReducer';
import openPanelReducer from './openPanelReducer';

const rootReducer = combineReducers({
  isAuthReducer,
  userReducer,
  openPanelReducer,
});

export default rootReducer;
