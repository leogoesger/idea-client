import {NavbarTypes as types} from '../action-types';

const updateActiveSub = activeSub => {
  return {
    type: types.UPDATE_ACTIVESUB,
    activeSub,
  };
};

export function editActiveSub(activeSub) {
  return dispatch => {
    dispatch(updateActiveSub(activeSub));
  };
}