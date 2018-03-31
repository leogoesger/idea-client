import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/team/Layout';

export class Team extends React.Component {
  render() {
    return <Layout />;
  }
}

Team.propTypes = {
  users: PropTypes.array,
};

export default Team;
