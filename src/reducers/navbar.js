import { NavbarTypes as types } from "../action-types";
import objectAssign from "object-assign";

type STATE = {};
type ACTION = {};
const initialState: STATE = {
  activeSub: "policiesAndProcedures",
};

export default function(state: STATE = initialState, action: ACTION) {
  switch (action.type) {
    case types.UPDATE_ACTIVESUB:
      return objectAssign({}, state, { activeSub: action.activeSub });

    default:
      return state;
  }
}
