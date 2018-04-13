import request from 'superagent';
import {TeamTypes as types} from '../action-types';

const updateTeamObjects = members => {
  return {
    type: types.UPDATE_MEMBERS_OBJECTS,
    members,
  };
};

export function fetchTeam() {
  return async dispatch => {
    const members = await request.get(`${process.env.SERVER_ADDRESS}/members`);
    dispatch(updateTeamObjects(members.body));
  };
}

export function addMember(members) {
  return dispatch => {
    dispatch(updateTeamObjects(members));
  };
}

export function editMember(members) {
  return dispatch => {
    dispatch(updateTeamObjects(members));
  };
}

export function deleteMember(members) {
  return dispatch => {
    dispatch(updateTeamObjects(members));
  };
}
