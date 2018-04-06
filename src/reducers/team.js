import {TeamTypes as types} from '../action-types';
import objectAssign from 'object-assign';

type STATE = {};
type ACTION = {};
const initialState: STATE = {
  members: null,
};

export default function(state: STATE = initialState, action: ACTION) {
  switch (action.type) {
    case types.UPDATE_MEMBERS_OBJECTS:
      return objectAssign({}, state, {members: action.members});

    default:
      return state;
  }
}
