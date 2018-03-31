import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/home/Layout';

export class Home extends React.Component {
  render() {
    return <Layout />;
  }
}

Home.propTypes = {
  users: PropTypes.array,
};

export default Home;
