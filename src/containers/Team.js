import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Layout from '../components/team/Layout';

export class Team extends React.Component {
  render() {
    return <Layout />;
  }
}

Team.propTypes = {
  users: PropTypes.array,
};

const mapStateToProps = state => {
  return null;
};

const mapDispatchToProps = dispatch => {
  return null;
};

export default connect(mapStateToProps, mapDispatchToProps)(Team);
