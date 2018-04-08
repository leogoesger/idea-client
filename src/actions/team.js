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
        name: 'Nancy M. Callahan',
        title: 'Ph.D. 20+ years of experience',
        description:
          'Test: dolor sit amet, consectetur adipiscing elit. Sed condimentum commodo quam, nec feugiat ipsum viverra sit amet. Donec id ornare turpis. Nullam quis rutrum erat, et vehicula turpis. Praesent ullamcorper ipsum erat, eu faucibus odio auctor at.',
        image: 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png',
      },
      {
        name: 'Vijay K. Ganju',
        title: 'Ph.D. 20+ years of experience',
        description:
          'Test: dolor sit amet, consectetur adipiscing elit. Sed condimentum commodo quam, nec feugiat ipsum viverra sit amet. Donec id ornare turpis. Nullam quis rutrum erat, et vehicula turpis. Praesent ullamcorper ipsum erat, eu faucibus odio auctor at.',
        image: 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png',
      },
      {
        name: 'Joanne Guillot',
        title: 'Junior consultant',
        description:
          'Test: dolor sit amet, consectetur adipiscing elit. Sed condimentum commodo quam, nec feugiat ipsum viverra sit amet. Donec id ornare turpis. Nullam quis rutrum erat, et vehicula turpis. Praesent ullamcorper ipsum erat, eu faucibus odio auctor at.',
        image: 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png',
      },
      {
        name: 'Michelle Duval',
        title: '1 year of experience',
        description:
          'Test: dolor sit amet, consectetur adipiscing elit. Sed condimentum commodo quam, nec feugiat ipsum viverra sit amet. Donec id ornare turpis. Nullam quis rutrum erat, et vehicula turpis. Praesent ullamcorper ipsum erat, eu faucibus odio auctor at.',
        image: 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png',
      },
      {
        name: 'Dennis G. Olson',
        title: 'M.S.W 10 years of experience',
        description:
          'Test: dolor sit amet, consectetur adipiscing elit. Sed condimentum commodo quam, nec feugiat ipsum viverra sit amet. Donec id ornare turpis. Nullam quis rutrum erat, et vehicula turpis. Praesent ullamcorper ipsum erat, eu faucibus odio auctor at.',
        image: 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png',
      },
    ];
    dispatch(updateTeamObjects(members));
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
