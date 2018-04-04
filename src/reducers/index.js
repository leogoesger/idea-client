import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import user from './user';
import home from './home';
import contract from './contract'

const rootReducer = combineReducers({
  routing: routerReducer,
  user,
  home,
  contract,
});

export default rootReducer;
