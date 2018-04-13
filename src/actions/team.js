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
  return async dispatch => {
    await request
      .put(`${process.env.SERVER_ADDRESS}/members`)
      .send({member: members});
    dispatch(updateTeamObjects(members));
  };
}

export function editMember(members) {
  return async dispatch => {
    await request
      .put(`${process.env.SERVER_ADDRESS}/members`)
      .send({member: members});
    dispatch(updateTeamObjects(members));
  };
}

export function deleteMember(members) {
  return async dispatch => {
    await request
      .put(`${process.env.SERVER_ADDRESS}/members`)
      .send({member: members});
    dispatch(updateTeamObjects(members));
  };
}
