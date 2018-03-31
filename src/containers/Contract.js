import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/contract/Layout';

export class Contract extends React.Component {
  render() {
    return <Layout />;
  }
}

Contract.propTypes = {
  users: PropTypes.array,
};

export default Contract;
