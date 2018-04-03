import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import user from './user';
import home from './home';

const rootReducer = combineReducers({
  routing: routerReducer,
  user,
  home,
});

export default rootReducer;
