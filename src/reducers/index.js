import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import user from './user';
import home from './home';
import contract from './contract';
import contact from './contact';
import service from './service';

const rootReducer = combineReducers({
  routing: routerReducer,
  user,
  home,
  contract,
  contact,
  service,
});

export default rootReducer;
