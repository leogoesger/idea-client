import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  fetchTeam,
  addMember,
  editMember,
  deleteMember,
} from "../actions/team";

import Layout from "../components/team/Layout";
import Loader from "../components/shared/Loader";

export class Team extends React.Component {
  componentWillMount() {
    this.props.fetchTeam();
  }

  render() {
    if (!this.props.members) {
      return <Loader loading={true} />;
    }

    return (
      <Layout
        currentUser={this.props.currentUser}
        members={this.props.members}
        addMember={team => this.props.addMember(team)}
        editMember={team => this.props.editMember(team)}
        deleteMember={team => this.props.deleteMember(team)}
      />
    );
  }
}

Team.propTypes = {
  members: PropTypes.array,
  fetchTeam: PropTypes.func,
  addMember: PropTypes.func,
  editMember: PropTypes.func,
  deleteMember: PropTypes.func,
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
    editMember: member => dispatch(editMember(member)),
    deleteMember: team => dispatch(deleteMember(team)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Team);
