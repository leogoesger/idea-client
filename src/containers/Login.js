import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/login/Layout';

export class Login extends React.Component {
  render() {
    return <Layout />;
  }
}

Login.propTypes = {
  users: PropTypes.array,
};

export default Login;
