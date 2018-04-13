import {ContractTypes as types} from '../action-types';
import objectAssign from 'object-assign';

type STATE = {};
type ACTION = {};
const initialState: STATE = {
  contracts: null,
};

export default function(state: STATE = initialState, action: ACTION) {
  switch (action.type) {
    case types.UPDATE_CONTRACT_OBJECTS:
      return objectAssign({}, state, {contracts: action.contracts});

    default:
      return state;
  }
}
