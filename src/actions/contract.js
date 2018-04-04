import {ContractTypes as types} from '../action-types';

const updateContractObjects = ({state, county}) => {
  return {
    type: types.UPDATE_CONTRACT_OBJECTS,
    state,
    county,
  };
};

export function fetchContracts(contracts) {
  return dispatch => {
    dispatch(updateContractObjects(contracts));
  };
}

export function editContracts(contracts) {
  return dispatch => {
    dispatch(updateContractObjects(contracts));
  };
}

export function deleteContracts(contracts) {
  return dispatch => {
    dispatch(updateContractObjects(contracts));
  };
}

export function addContracts(contracts) {
  return dispatch => {
    dispatch(updateContractObjects(contracts));
  };
}