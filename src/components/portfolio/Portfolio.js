import React from 'react';
import PropTypes from 'prop-types';
import {cloneDeep} from 'lodash';
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';

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
  _renderAddNewBtn() {
    if (this.props.currentUser) {
      return (
        <div style={styles.btnContainer}>
          <Button
            variant="flat"
            color="primary"
            size="small"
            onClick={() => this._addService()}
          >
            {'Add New Service'}
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
          editData={data => this._editPortfolio(data, index)}
        />
      );
    });
  }

  render() {
    if (!this.props.portfolioData) {
      return null;
    } else if (this.props.portfolioData.data[0].subtitle) {
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
