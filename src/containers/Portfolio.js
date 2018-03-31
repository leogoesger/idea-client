import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/portfolio/Layout';

export class Portfolio extends React.Component {
  render() {
    return <Layout />;
  }
}

Portfolio.propTypes = {
  users: PropTypes.array,
};

export default Portfolio;
