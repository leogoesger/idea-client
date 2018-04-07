import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import user from './user';
import home from './home';
import contract from './contract';
import contact from './contact';
import service from './service';
import team from './team';
import portfolio from './portfolio';

const rootReducer = combineReducers({
  routing: routerReducer,
  user,
  home,
  contract,
  contact,
  service,
  team,
  portfolio,
});

export default rootReducer;
