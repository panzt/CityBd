import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import logged from './logged';
import indexed from './indexed';

const rootReducer = combineReducers({
  logged,
  indexed,
  routing: routerReducer
});

export default rootReducer;
