import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {loginUser} from '../actions/user';
import Layout from '../components/login/Layout';

export class Login extends React.Component {
  render() {
    return (
      <Layout
        loginUser={user => this.props.loginUser(user)}
        error={this.props.error}
      />
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func,
  error: PropTypes.object,
};

const mapStateToProps = state => {
  return {
    error: state.user.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginUser: user => dispatch(loginUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
