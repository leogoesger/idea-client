import React from 'react';
import PropTypes from 'prop-types';
import {cloneDeep} from 'lodash';
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';

import Paragraph from '../shared/Paragraph';
import EditExpansion from './EditExpansion';

export default class Portolio extends React.Component {
  _editPortfolios(paragraph, number, attir) {
    const portfolioData = cloneDeep(this.props.portfolioData);

    if (!attir && attir !== 0) {
      portfolioData.data[number] = paragraph;
      return this.props.editPortfolio(portfolioData, this.props.currentSelect);
    }
    portfolioData.data[number][attir] = paragraph;

    this.props.editPortfolio(portfolioData, this.props.currentSelect);
  }

  _addNewPortfolio() {
    const portfolioData = cloneDeep(this.props.portfolioData);
    let newPortfolio = {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      url: 'https://google.com',
    };
    if (this.props.currentSelect === 'policiesAndProcedures') {
      newPortfolio = {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        subtitle: [{title: 'Services we provide...', url: 'http://google.com'}],
      };
    }

    portfolioData.data.push(newPortfolio);
    this.props.addPortfolio(portfolioData, this.props.currentSelect);
  }

  _deletePortfolio(index) {
    const portfolioData = cloneDeep(this.props.portfolioData);
    portfolioData.data.splice(index, 1);
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
            deleteParagraph={() => this._deletePortfolio(index)}
          >
            <a href={data.url} target="_blank">
              <li>{data.title}</li>
            </a>
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
  _renderAddNewBtn() {
    if (this.props.currentUser) {
      return (
        <div style={styles.btnContainer}>
          <Button
            variant="flat"
            color="primary"
            size="small"
            onClick={() => this._addNewPortfolio()}
          >
            {'Add New Portfolio'}
          </Button>
        </div>
      );
    }
  }

  _renderDataWithSubtitle() {
    return this.props.portfolioData.data.map((data, index) => {
      return (
        <EditExpansion
          key={index}
          data={data}
          titleName={'title'}
          subtitleName={'subtitle'}
          currentUser={this.props.currentUser}
          editData={data => this._editPortfolios(data, index, null)}
          deleteData={() => this._deletePortfolio(index)}
        />
      );
    });
  }

  render() {
    if (!this.props.portfolioData) {
      return null;
    } else if (this.props.currentSelect == 'policiesAndProcedures') {
      return (
        <div>
          {this._renderDataWithSubtitle()}
          {this._renderAddNewBtn()}
        </div>
      );
    }

    return (
      <div style={{padding: '20px 20px 0px 20px'}}>
        {this._renderPortfolioData()}
        {this._renderAddNewBtn()}
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

const styles = {
  btnContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '20px',
    marginBottom: '20px',
  },
};
