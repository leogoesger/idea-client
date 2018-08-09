import request from "superagent";
import { ContractTypes as types } from "../action-types";

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

export function editContracts(contracts, type) {
  return async dispatch => {
    const ideaJWT = window.localStorage.ideaJWT;
    const response = await request
      .put(`${process.env.SERVER_ADDRESS}/contracts`)
      .send({ [type]: contracts })
      .set("ideaJWT", ideaJWT);
    const { stateContracts, countyContracts } = response.body;
    dispatch(updateContractObjects({ stateContracts, countyContracts }));
  };
}

export function deleteContracts(contracts, type) {
  return async dispatch => {
    const ideaJWT = window.localStorage.ideaJWT;
    const response = await request
      .put(`${process.env.SERVER_ADDRESS}/contracts`)
      .send({ [type]: contracts })
      .set("ideaJWT", ideaJWT);
    const { stateContracts, countyContracts } = response.body;
    dispatch(updateContractObjects({ stateContracts, countyContracts }));
  };
}

export function addContracts(contracts, type) {
  return async dispatch => {
    const ideaJWT = window.localStorage.ideaJWT;
    const response = await request
      .put(`${process.env.SERVER_ADDRESS}/contracts`)
      .send({ [type]: contracts })
      .set("ideaJWT", ideaJWT);
    const { stateContracts, countyContracts } = response.body;
    dispatch(updateContractObjects({ stateContracts, countyContracts }));
  };
}
