import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {
  fetchPortfolios,
  addPortfolio,
  editPortfolio,
  deletePortfolio,
} from '../actions/portfolio';
import {editActiveSub} from '../actions/navbar';

import Layout from '../components/portfolio/Layout';

export class Portfolio extends React.Component {
  componentWillMount() {
    this.props.fetchPortfolios();
  }

  render() {
    const data = {
      researchAndEvaluation: this.props.researchAndEvaluation,
      mentalHealthService: this.props.mentalHealthService,
      dataModels: this.props.dataModels,
      logicModels: this.props.logicModels,
      plans: this.props.plans,
      forms: this.props.forms,
      policiesAndProcedures: this.props.policiesAndProcedures,
      grants: this.props.grants,
    };
    return (
      <Layout
        currentUser={this.props.currentUser}
        data={data}
        addPortfolio={(service, serviceType) =>
          this.props.addPortfolio(service, serviceType)
        }
        editPortfolio={(service, serviceType) =>
          this.props.editPortfolio(service, serviceType)
        }
        deletePortfolio={(service, serviceType) =>
          this.props.deletePortfolio(service, serviceType)
        }
        editActiveSub={activeSub => this.props.editActiveSub(activeSub)}
        activeSelection={this.props.activeSub}
      />
    );
  }
}

Portfolio.propTypes = {
  currentUser: PropTypes.object,
  researchAndEvaluation: PropTypes.object,
  mentalHealthService: PropTypes.object,
  dataModels: PropTypes.object,
  logicModels: PropTypes.object,
  plans: PropTypes.object,
  forms: PropTypes.object,
  policiesAndProcedures: PropTypes.object,
  grants: PropTypes.object,
  fetchPortfolios: PropTypes.func,
  addPortfolio: PropTypes.func,
  editPortfolio: PropTypes.func,
  deletePortfolio: PropTypes.func,
  editActiveSub: PropTypes.func,
  activeSub: PropTypes.string,
};

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser,
    paragraphs: state.home.paragraphs,
    researchAndEvaluation: state.portfolio.researchAndEvaluation,
    mentalHealthService: state.portfolio.mentalHealthService,
    dataModels: state.portfolio.dataModels,
    logicModels: state.portfolio.logicModels,
    plans: state.portfolio.plans,
    forms: state.portfolio.forms,
    policiesAndProcedures: state.portfolio.policiesAndProcedures,
    grants: state.portfolio.grants,
    activeSub: state.navbar.activeSub,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPortfolios: () => dispatch(fetchPortfolios()),
    addPortfolio: (portfolio, portfolioType) =>
      dispatch(addPortfolio(portfolio, portfolioType)),
    editPortfolio: (portfolio, portfolioType) =>
      dispatch(editPortfolio(portfolio, portfolioType)),
    deletePortfolio: (portfolio, portfolioType) =>
      dispatch(deletePortfolio(portfolio, portfolioType)),
    editActiveSub: activeSub => 
      dispatch(editActiveSub(activeSub)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
