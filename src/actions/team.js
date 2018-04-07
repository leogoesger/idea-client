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
        name: "Test Name1",
        title: "Test Member",
        description: 'Test: dolor sit amet, consectetur adipiscing elit. Sed condimentum commodo quam, nec feugiat ipsum viverra sit amet. Donec id ornare turpis. Nullam quis rutrum erat, et vehicula turpis. Praesent ullamcorper ipsum erat, eu faucibus odio auctor at.',
        image: 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png',
      },
      {
        name: "Test Name2",
        title: "Test Member",
        description: 'Test: dolor sit amet, consectetur adipiscing elit. Sed condimentum commodo quam, nec feugiat ipsum viverra sit amet. Donec id ornare turpis. Nullam quis rutrum erat, et vehicula turpis. Praesent ullamcorper ipsum erat, eu faucibus odio auctor at.',
        image: 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png',
      },
      {
        name: "Test Name3",
        title: "Test Member",
        description: 'Test: dolor sit amet, consectetur adipiscing elit. Sed condimentum commodo quam, nec feugiat ipsum viverra sit amet. Donec id ornare turpis. Nullam quis rutrum erat, et vehicula turpis. Praesent ullamcorper ipsum erat, eu faucibus odio auctor at.',
        image: 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png',
      },
      {
        name: "Test Name4",
        title: "Test Member",
        description: 'Test: dolor sit amet, consectetur adipiscing elit. Sed condimentum commodo quam, nec feugiat ipsum viverra sit amet. Donec id ornare turpis. Nullam quis rutrum erat, et vehicula turpis. Praesent ullamcorper ipsum erat, eu faucibus odio auctor at.',
        image: 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png',
      },
      {
        name: "Test Name5",
        title: "Test Member",
        description: 'Test: dolor sit amet, consectetur adipiscing elit. Sed condimentum commodo quam, nec feugiat ipsum viverra sit amet. Donec id ornare turpis. Nullam quis rutrum erat, et vehicula turpis. Praesent ullamcorper ipsum erat, eu faucibus odio auctor at.',
        image: 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png',
      },
    ];
    dispatch(updateTeamObjects(members));
  };
}

export function addMember(members){
  return dispatch => {
    dispatch(updateTeamObjects(members));
  };
}

export function editMember(members){
  return dispatch => {
    dispatch(updateTeamObjects(members));
  };
}