import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {fetchCurrentUser, logOutUser} from '../actions/user';
import Layout from '../components/navbar/Layout';

export class Navbar extends React.Component {
  componentDidMount() {
    if (window.localStorage.ideaJWT && !this.props.currentUser) {
      this.props.fetchCurrentUser();
    }
  }

  render() {
    return (
      <Layout
        path={this.props.location.pathname}
        logOutUser={() => this.props.logOutUser()}
        currentUser={this.props.currentUser}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCurrentUser: () => dispatch(fetchCurrentUser()),
    logOutUser: () => dispatch(logOutUser()),
  };
};

Navbar.propTypes = {
  location: PropTypes.object,
  fetchCurrentUser: PropTypes.func,
  currentUser: PropTypes.object,
  logOutUser: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
