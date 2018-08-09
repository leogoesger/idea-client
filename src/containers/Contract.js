import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  fetchContracts,
  editContracts,
  deleteContracts,
  addContracts,
} from "../actions/contract";
import Layout from "../components/contract/Layout";
import Loader from "../components/shared/Loader";

export class Contract extends React.Component {
  componentWillMount() {
    this.props.fetchContracts();
  }
  render() {
    if (
      this.props.stateContracts.length < 1 ||
      this.props.countyContracts.length < 1
    ) {
      return <Loader loading={true} />;
    }
    return (
      <Layout
        currentUser={this.props.currentUser}
        countyContracts={this.props.countyContracts}
        stateContracts={this.props.stateContracts}
        editContracts={this.props.editContracts}
        deleteContracts={this.props.deleteContracts}
        addContracts={this.props.addContracts}
      />
    );
  }
}

Contract.propTypes = {
  countyContracts: PropTypes.array,
  stateContracts: PropTypes.array,
  fetchContracts: PropTypes.func,
  editContracts: PropTypes.func,
  deleteContracts: PropTypes.func,
  addContracts: PropTypes.func,
  currentUser: PropTypes.object,
};

const mapStateToProps = state => {
  return {
    countyContracts: state.contract.countyContracts,
    stateContracts: state.contract.stateContracts,
    currentUser: state.user.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchContracts: contracts => dispatch(fetchContracts(contracts)),
    editContracts: (contracts, type) =>
      dispatch(editContracts(contracts, type)),
    deleteContracts: (contracts, type) =>
      dispatch(deleteContracts(contracts, type)),
    addContracts: (contracts, type) => dispatch(addContracts(contracts, type)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contract);
