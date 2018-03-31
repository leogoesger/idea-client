import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/navbar/Layout';

export class Navbar extends React.Component {
  render() {
    return <Layout />;
  }
}

Navbar.propTypes = {
  users: PropTypes.array,
};

export default Navbar;
