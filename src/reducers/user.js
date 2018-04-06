import {UserTypes as types} from '../action-types';
import objectAssign from 'object-assign';

type STATE = {};
type ACTION = {};
const initialState: STATE = {
  currentUser: null,
  error: null,
};

export default function(state: STATE = initialState, action: ACTION) {
  switch (action.type) {
    case types.LOGIN_USER_OBJECT:
      return objectAssign({}, state, {currentUser: action.userInfo});
    case types.LOGIN_USER_ERROR_OBJECT:
      return objectAssign({}, state, {
        error: action.message,
      });
    case types.FETCH_CURRENT_USER_SUCCESS:
      return objectAssign({}, state, {currentUser: action.currentUser});
    case types.LOG_OUT_USER:
      return objectAssign({}, state, {currentUser: null});

    default:
      return state;
  }
}
