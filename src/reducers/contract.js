import {ContractTypes as types} from '../action-types';
import objectAssign from 'object-assign';

type STATE = {};
type ACTION = {};
const initialState: STATE = {
  state: null,
  county: null,
};

export default function(state: STATE = initialState, action: ACTION) {
  switch (action.type) {
    case types.UPDATE_CONTRACT_OBJECTS:
      return objectAssign({}, state, {state: action.state, county: action.county});

    default:
      return state;
  }
}
