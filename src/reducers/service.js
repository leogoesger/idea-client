import {ServiceTypes as types} from '../action-types';
import objectAssign from 'object-assign';

type STATE = {};
type ACTION = {};
const initialState: STATE = {
  overviewServices: null,
  stateServices: null,
  countyServices: null,
};

export default function(state: STATE = initialState, action: ACTION) {
  switch (action.type) {
    case types.FETCH_SERVICE_OBJECTS:
      return objectAssign({}, {state: action.services});

    default:
      return state;
  }
}
