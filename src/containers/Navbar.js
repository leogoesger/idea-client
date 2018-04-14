import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {fetchCurrentUser, logOutUser} from '../actions/user';
import {editActiveSub} from '../actions/navbar';
import Layout from '../components/navbar/Layout';

export class Navbar extends React.Component {
  componentDidMount() {
    if (window.localStorage.ideaJWT && !this.props.currentUser) {
      this.props.fetchCurrentUser();
    }
  }

  render() {
    const data = [
      {
        name: 'Research and Evaluation Reports',
        value: 'researchAndEvaluation'
      },{
        name: 'Mental Health Services Act Materials',
        value: 'mentalHealthService'
      },{
        name: 'Data Models',
        value: 'dataModels'
      },{
        name: 'Logic Models',
        value: 'logicModels'
      },{
        name: 'Plans',
        value: 'plans'
      },{
        name: 'Forms',
        value: 'forms'
      },{
        name: 'Policies and Procedures',
        value: 'policiesAndProcedures'
      },{
        name: 'Grants',
        value: 'grants'
      },
    ];
    return (
      <Layout
        path={this.props.location.pathname}
        logOutUser={() => this.props.logOutUser()}
        currentUser={this.props.currentUser}
        portfolioSub={data}
        editActiveSub={activeSub => this.props.editActiveSub(activeSub)}
        activeSub={this.props.activeSub}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser,
    activeSub: state.navbar.activeSub,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCurrentUser: () => dispatch(fetchCurrentUser()),
    logOutUser: () => dispatch(logOutUser()),
    editActiveSub: activeSub => dispatch(editActiveSub(activeSub)),
  };
};

Navbar.propTypes = {
  location: PropTypes.object,
  fetchCurrentUser: PropTypes.func,
  currentUser: PropTypes.object,
  logOutUser: PropTypes.func,
  editActiveSub: PropTypes.func,
  activeSub: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
