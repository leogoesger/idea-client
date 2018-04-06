import {TeamTypes as types} from '../action-types';

const updateTeamObjects = members => {
  return {
    type: types.UPDATE_MEMBERS_OBJECTS,
    members,
  };
};

export function fetchTeam() {
  return dispatch => {
    const members = [
      {
        name: "Test",
        title: "Test",
        image: '',
      }
    ];
    dispatch(updateTeamObjects(members));
  };
}