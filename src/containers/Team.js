import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {
  fetchTeam,
  addMember,
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
        addMember={team => this.props.addMember(team)}
      />
    );
  }
}

Team.propTypes = {
  members: PropTypes.array,
  fetchTeam: PropTypes.func,
  addMember: PropTypes.func,
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
    addMember: member => dispatch(addMember(member)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Team);
