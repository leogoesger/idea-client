import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {
  fetchTeam,
} from '../actions/team';

import Layout from '../components/team/Layout';




export class Team extends React.Component {
  componentWillMount() {
    this.props.fetchTeam();
  }

  render() {
    if (!this.props.members) {
      return null;
    }

    return (
      <Layout
        currentUser={this.props.currentUser}
        members={this.props.members}
      />
    );
  }
}

Team.propTypes = {
  members: PropTypes.array,
  fetchTeam: PropTypes.func,
  currentUser: PropTypes.object,
};

const mapStateToProps = state => {
  return {
    members: state.team.members,
    currentUser: state.user.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTeam: () => dispatch(fetchTeam()),
  };
};

Team.propTypes = {
  users: PropTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(Team);
