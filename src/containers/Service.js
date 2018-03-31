import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Layout from '../components/service/Layout';

export class Service extends React.Component {
  render() {
    return <Layout />;
  }
}

Service.propTypes = {
  users: PropTypes.array,
};

const mapStateToProps = state => {
  return null;
};

const mapDispatchToProps = dispatch => {
  return null;
};

export default connect(mapStateToProps, mapDispatchToProps)(Service);
