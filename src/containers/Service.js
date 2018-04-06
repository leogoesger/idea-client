import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {fetchServices} from '../actions/service';

import Layout from '../components/service/Layout';

export class Service extends React.Component {
  componentWillMount() {
    this.props.fetchServices();
  }

  render() {
    return <Layout />;
  }
}

Service.propTypes = {
  fetchServices: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    overviewServices: state.service.overviewServices,
    stateServices: state.service.stateServices,
    countyServices: state.service.countyServices,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchServices: () => dispatch(fetchServices()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Service);
