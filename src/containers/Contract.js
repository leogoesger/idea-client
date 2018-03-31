import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Layout from '../components/contract/Layout';

export class Contract extends React.Component {
  render() {
    return <Layout />;
  }
}

Contract.propTypes = {
  users: PropTypes.array,
};

const mapStateToProps = state => {
  return null;
};

const mapDispatchToProps = dispatch => {
  return null;
};

export default connect(mapStateToProps, mapDispatchToProps)(Contract);
