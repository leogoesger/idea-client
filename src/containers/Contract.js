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
    const state = [
      'California Department of Mental Health',
      'Nevada Department of Mental Health',
      'Utah Department of Mental Health',
      'Wyoming Mental Health Division',
      'Wyoming Substance Abuse Division',
      'Washington Department of Social and Health Services',
    ];
    const county = [
      'Alpine County Behavioral Health',
      'Butte County Department of Employment and Social Services',
      'Butte County Behavioral Health',
      'Colusa County',
    ];
    this.props.fetchContracts({state, county});
  }
  render() {
    return (
      <Layout
        currentUser={this.props.currentUser}
        state={this.props.state}
        county={this.props.county}
        editContracts={paragraphs => this.props.editContracts(paragraphs)}
        deleteContracts={paragraphs => this.props.deleteContracts(paragraphs)}
        addContracts={paragraphs => this.props.addContracts(paragraphs)}
      />
    );
  }
}

Contract.propTypes = {
  state: PropTypes.array,
  county: PropTypes.array,
  fetchContracts: PropTypes.func,
  editContracts: PropTypes.func,
  deleteContracts: PropTypes.func,
  addContracts: PropTypes.func,
  currentUser: PropTypes.object,
};

const mapStateToProps = state => {
  return {
    state: state.contract.state,
    county: state.contract.county,
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
