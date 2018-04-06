import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {
  fetchServices,
  addService,
  editService,
  deleteService,
} from '../actions/service';

import Layout from '../components/service/Layout';

export class Service extends React.Component {
  componentWillMount() {
    this.props.fetchServices();
  }

  render() {
    return (
      <Layout
        overviewServices={this.props.overviewServices}
        stateServices={this.props.stateServices}
        countyServices={this.props.countyServices}
        addService={(service, serviceType) =>
          this.props.addService(service, serviceType)
        }
        editService={(service, serviceType) =>
          this.props.editService(service, serviceType)
        }
        deleteService={(service, serviceType) =>
          this.props.deleteService(service, serviceType)
        }
        currentUser={this.props.currentUser}
      />
    );
  }
}

Service.propTypes = {
  fetchServices: PropTypes.func,
  addService: PropTypes.func,
  editService: PropTypes.func,
  deleteService: PropTypes.func,
  stateServices: PropTypes.object,
  overviewServices: PropTypes.object,
  countyServices: PropTypes.object,
  currentUser: PropTypes.object,
};

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser,
    overviewServices: state.service.overviewServices,
    stateServices: state.service.stateServices,
    countyServices: state.service.countyServices,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchServices: () => dispatch(fetchServices()),
    addService: () => dispatch(addService()),
    editService: () => dispatch(editService()),
    deleteService: () => dispatch(deleteService()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Service);
