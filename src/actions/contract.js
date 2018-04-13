import request from 'superagent';
import {ContractTypes as types} from '../action-types';

const updateContractObjects = contracts => {
  return {
    type: types.UPDATE_CONTRACT_OBJECTS,
    contracts,
  };
};

export function fetchContracts() {
  return async dispatch => {
    const contracts = await request.get(
      `${process.env.SERVER_ADDRESS}/contracts`
    );
    dispatch(updateContractObjects(contracts.body));
  };
}

export function editContracts(contracts) {
  return async dispatch => {
    const response = await request
      .put(`${process.env.SERVER_ADDRESS}/contracts`)
      .send({contract: contracts});
    dispatch(updateContractObjects(response.body.contract));
  };
}

export function deleteContracts(contracts) {
  return async dispatch => {
    const response = await request
      .put(`${process.env.SERVER_ADDRESS}/contracts`)
      .send({contract: contracts});
    dispatch(updateContractObjects(response.body.contract));
  };
}

export function addContracts(contracts) {
  return async dispatch => {
    const response = await request
      .put(`${process.env.SERVER_ADDRESS}/contracts`)
      .send({contract: contracts});
    dispatch(updateContractObjects(response.body.contract));
  };
}
