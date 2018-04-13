import {ContractTypes as types} from '../action-types';

const updateContractObjects = (contracts) => {
  return {
    type: types.UPDATE_CONTRACT_OBJECTS,
    contracts,
  };
};

export function fetchContracts() {
  return dispatch => {
    const contracts = [
      'California Department of Mental Health',
      'Nevada Department of Mental Health',
      'Utah Department of Mental Health',
      'Wyoming Mental Health Division',
      'Wyoming Substance Abuse Division',
      'Washington Department of Social and Health Services',
      'Alpine County Behavioral Health',
      'Butte County Department of Employment and Social Services',
      'Butte County Behavioral Health',
      'Colusa County',
    ];
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