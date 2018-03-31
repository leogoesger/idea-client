import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/service/Layout';

export class Service extends React.Component {
  render() {
    return <Layout />;
  }
}

Service.propTypes = {
  users: PropTypes.array,
};

export default Service;
