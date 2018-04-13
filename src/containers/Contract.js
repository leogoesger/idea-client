import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {
  fetchContracts,
  editContracts,
  deleteContracts,
  addContracts,
} from '../actions/contract';
import Layout from '../components/contract/Layout';

export class Contract extends React.Component {
  componentWillMount() {
    this.props.fetchContracts();
  }
  render() {
    if(!this.props.contracts)
      return null;

    return (
      <Layout
        currentUser={this.props.currentUser}
        contracts={this.props.contracts}
        editContracts={paragraphs => this.props.editContracts(paragraphs)}
        deleteContracts={paragraphs => this.props.deleteContracts(paragraphs)}
        addContracts={paragraphs => this.props.addContracts(paragraphs)}
      />
    );
  }
}

Contract.propTypes = {
  contracts: PropTypes.array,
  fetchContracts: PropTypes.func,
  editContracts: PropTypes.func,
  deleteContracts: PropTypes.func,
  addContracts: PropTypes.func,
  currentUser: PropTypes.object,
};

const mapStateToProps = state => {
  return {
    contracts: state.contract.contracts,
    currentUser: state.user.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchContracts: contracts => dispatch(fetchContracts(contracts)),
    editContracts: contracts => dispatch(editContracts(contracts)),
    deleteContracts: contracts => dispatch(deleteContracts(contracts)),
    addContracts: contracts => dispatch(addContracts(contracts)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contract);
