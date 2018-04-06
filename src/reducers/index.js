import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import user from './user';
import home from './home';
import contract from './contract'
import contact from './contact'

const rootReducer = combineReducers({
  routing: routerReducer,
  user,
  home,
  contract,
  contact,
});

export default rootReducer;
