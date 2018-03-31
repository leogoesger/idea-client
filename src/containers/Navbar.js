import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Layout from '../components/navbar/Layout';

export class Navbar extends React.Component {
  render() {
    return <Layout />;
  }
}

Navbar.propTypes = {
  users: PropTypes.array,
};

const mapStateToProps = state => {
  return null;
};

const mapDispatchToProps = dispatch => {
  return null;
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
