import { ServiceTypes as types } from "../action-types";
import objectAssign from "object-assign";

type STATE = {};
type ACTION = {};
const initialState: STATE = {
  overviewServices: null,
  services: null,
};

export default function(state: STATE = initialState, action: ACTION) {
  switch (action.type) {
    case types.FETCH_SERVICE_OBJECTS:
      return objectAssign({}, action.services);

    case types.UPDATE_SERVICE_OBJECTS:
      return objectAssign({}, state, { [action.serviceType]: action.service });

    default:
      return state;
  }
}
