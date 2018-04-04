import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {fetchCurrentUser} from '../actions/user';
import Layout from '../components/navbar/Layout';

export class Navbar extends React.Component {
  componentDidMount() {
    if (window.localStorage.ideaJWT && !this.props.currentUser) {
      this.props.fetchCurrentUser();
    }
  }

  render() {
    return <Layout path={this.props.location.pathname} />;
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
  };
};

Navbar.propTypes = {
  location: PropTypes.object,
  fetchCurrentUser: PropTypes.func,
  currentUser: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
