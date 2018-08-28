import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  fetchServices,
  addService,
  editService,
  deleteService,
} from "../actions/service";

import Layout from "../components/service/Layout";

export class Service extends React.Component {
  componentDidMount() {
    document.title =
      "Innovative Development & Evaluation Associates - Services";
    document.getElementsByTagName("META")[3].content =
      "I.D.E.A. Consulting provides exemplary leadership to county and state-level systems, assisting them in designing programs, evaluating services, complying with federal and state regulations, and transforming systems to achieve positive outcomes.";

    this.props.fetchServices();
  }

  render() {
    return (
      <Layout
        overviewServices={this.props.overviewServices}
        services={this.props.services}
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
  overviewServices: PropTypes.object,
  services: PropTypes.array,
  currentUser: PropTypes.object,
};

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser,
    overviewServices: state.service.overviewServices,
    services: state.service.services,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchServices: () => dispatch(fetchServices()),
    addService: (service, serviceType) =>
      dispatch(addService(service, serviceType)),
    editService: (service, serviceType) =>
      dispatch(editService(service, serviceType)),
    deleteService: (service, serviceType) =>
      dispatch(deleteService(service, serviceType)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Service);
