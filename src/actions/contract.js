import {ContractTypes as types} from '../action-types';

const fetchContractObjects = ({state, county}) => {
  return {
    type: types.FEATCH_CONTRACT_OBJECTS,
    state,
    county,
  };
};

export function fetchContracts(contracts) {
  return dispatch => {
    dispatch(fetchContractObjects(contracts));
  };
}
