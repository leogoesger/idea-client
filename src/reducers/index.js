import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import user from './user';
import home from './home';
import contract from './contract';
import contact from './contact';
import service from './service';
import team from './team'

const rootReducer = combineReducers({
  routing: routerReducer,
  user,
  home,
  contract,
  contact,
  service,
  team,
});

export default rootReducer;
