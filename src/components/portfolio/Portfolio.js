import React from 'react';
import PropTypes from 'prop-types';
import {cloneDeep} from 'lodash';
import Divider from 'material-ui/Divider';

import Paragraph from '../shared/Paragraph';
import EditExpansion from '../shared/EditExpansion';

export default class Portolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  _editPortfolios(paragraph, number, attir) {
    const portfolioData = cloneDeep(this.props.portfolioData);
    portfolioData.data[number][attir] = paragraph;
    this.props.editPortfolio(portfolioData, this.props.currentSelect);
  }

  _addPortfolios() {
    const portfolioData = cloneDeep(this.props.portfolioData),
      newPortfolio = {
        title: 'Lorem ipsum',
        url: 'https://google.com',
      };
    portfolioData.data.push(newPortfolio);
    this.props.addPortfolio(portfolioData, this.props.currentSelect);
  }

  _renderPortfolioData() {
    return this.props.portfolioData.data.map((data, index) => {
      return (
        <div key={index} style={{padding: '5px 0px'}}>
          <Paragraph
            currentUser={this.props.currentUser}
            number={index}
            paragraph={data.title}
            editParagraphs={(paragraph, index) =>
              this._editPortfolios(paragraph, index, 'title')
            }
            deleteParagraph={index => this._deleteParagraph(index)}
          >
            <span style={{padding: '10px 0px'}}>
              <a href={data.url} target="_blank">
                {data.title}
              </a>
            </span>
          </Paragraph>
          {this.props.currentUser &&
            data.url && (
              <div>
                <Paragraph
                  currentUser={this.props.currentUser}
                  number={index}
                  paragraph={data.url}
                  editParagraphs={(paragraph, index) =>
                    this._editPortfolios(paragraph, index, 'url')
                  }
                >
                  <span style={{paddingLeft: '20px', color: '#64b5f6'}}>
                    {data.url}
                  </span>
                </Paragraph>
                <Divider />
              </div>
            )}
        </div>
      );
    });
  }

  render() {
    if (!this.props.portfolioData) {
      return null;
    }
    return (
      <div style={{padding: '20px 20px 0px 20px'}}>
        {this._renderPortfolioData()}
        <EditExpansion
          portfolioData={this.props.portfolioData}
          currentUser={this.props.currentUser}
          currentSelect={this.state.value}
          addPortfolio={(service, serviceType) =>
            this.props.addPortfolio(service, serviceType)
          }
          editPortfolio={(service, serviceType) =>
            this.props.editPortfolio(service, serviceType)
          }
          deletePortfolio={(service, serviceType) =>
            this.props.deletePortfolio(service, serviceType)
          }
        />
      </div>
    );
  }
}

Portolio.propTypes = {
  portfolioData: PropTypes.object,
  currentSelect: PropTypes.string,
  currentUser: PropTypes.object,
  addPortfolio: PropTypes.func,
  editPortfolio: PropTypes.func,
  deletePortfolio: PropTypes.func,
};
