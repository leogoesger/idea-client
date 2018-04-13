import request from 'superagent';
import {PortfolioTypes as types} from '../action-types';

const fetchPortfolioObjects = portfolios => {
  return {
    type: types.FETCH_PORTFOLIO_OBJECTS,
    portfolios,
  };
};

const updatePortfolioObject = (portfolio, portfolioType) => {
  return {
    type: types.UPDATE_PORTFOLIO_OBJECTS,
    portfolio,
    portfolioType,
  };
};

export function fetchPortfolios() {
  return async dispatch => {
    const portfolios = await request.get(
      `${process.env.SERVER_ADDRESS}/portfolios`
    );
    dispatch(fetchPortfolioObjects(portfolios.body));
  };
}

export function addPortfolio(portfolio, portfolioType) {
  return async dispatch => {
    await request
      .put(`${process.env.SERVER_ADDRESS}/portfolios`)
      .send({[portfolioType]: portfolio});
    dispatch(updatePortfolioObject(portfolio, portfolioType));
  };
}

export function editPortfolio(portfolio, portfolioType) {
  return async dispatch => {
    await request
      .put(`${process.env.SERVER_ADDRESS}/portfolios`)
      .send({[portfolioType]: portfolio});
    dispatch(updatePortfolioObject(portfolio, portfolioType));
  };
}

export function deletePortfolio(portfolio, portfolioType) {
  return async dispatch => {
    await request
      .put(`${process.env.SERVER_ADDRESS}/portfolios`)
      .send({[portfolioType]: portfolio});
    dispatch(updatePortfolioObject(portfolio, portfolioType));
  };
}
