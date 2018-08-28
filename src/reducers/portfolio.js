import { PortfolioTypes as types } from "../action-types";
import objectAssign from "object-assign";

type STATE = {};
type ACTION = {};
const initialState: STATE = {
  researchAndEvaluation: null,
  mentalHealthService: null,
  dataModels: null,
  logicModels: null,
  plans: null,
  forms: null,
  policiesAndProcedures: null,
  grants: null,
  brochures: null,
  presentations: null,
};

export default function(state: STATE = initialState, action: ACTION) {
  switch (action.type) {
    case types.FETCH_PORTFOLIO_OBJECTS:
      return objectAssign({}, action.portfolios);

    case types.UPDATE_PORTFOLIO_OBJECTS:
      return objectAssign({}, state, {
        [action.portfolioType]: action.portfolio,
      });

    default:
      return state;
  }
}
