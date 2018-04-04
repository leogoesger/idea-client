import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Tabs, {Tab} from 'material-ui/Tabs';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import {cloneDeep} from 'lodash';
import cyan from 'material-ui/colors/cyan';

import Paragraph from '../shared/Paragraph';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 0,
    };
  }

  _tabChange(v) {
    this.setState({tab: v});
  }

  _editParagraphs(paragraph, index) {
    const {tab} = this.state;
    const {state, county} = this.props;
    const updatedParagraphs = cloneDeep(tab === 0 ? state : county);
    const otherParagraphs = cloneDeep(tab === 1 ? state : county);
    updatedParagraphs[index] = paragraph;
    if (tab === 0)
      this.props.editContracts({
        state: updatedParagraphs,
        county: otherParagraphs,
      });
    else
      this.props.editContracts({
        county: updatedParagraphs,
        state: otherParagraphs,
      });
  }

  _deleteParagraph(index) {
    const {tab} = this.state;
    const {state, county} = this.props;
    const updatedParagraphs = cloneDeep(tab === 0 ? state : county);
    const otherParagraphs = cloneDeep(tab === 1 ? state : county);
    updatedParagraphs.splice(index, 1);
    if (tab === 0)
      this.props.deleteContracts({
        state: updatedParagraphs,
        county: otherParagraphs,
      });
    else
      this.props.deleteContracts({
        county: updatedParagraphs,
        state: otherParagraphs,
      });
  }

  _addParagraph() {
    const {tab} = this.state;
    const {state, county} = this.props;
    const updatedParagraphs = cloneDeep(tab === 0 ? state : county);
    const otherParagraphs = cloneDeep(tab === 1 ? state : county);
    updatedParagraphs.push(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    );
    if (tab === 0)
      this.props.addContracts({
        state: updatedParagraphs,
        county: otherParagraphs,
      });
    else
      this.props.addContracts({
        county: updatedParagraphs,
        state: otherParagraphs,
      });
  }

  _renderBtn() {
    if (!this.props.currentUser) {
      return (
        <div style={styles.btnContainer}>
          <Button
            variant="raised"
            style={styles.addBtn}
            size="small"
            onClick={() => this._addParagraph()}
          >
            {'Contact Us'}
          </Button>
        </div>
      );
    }
    return (
      <div style={styles.btnContainer}>
        <Button
          variant="raised"
          style={styles.addBtn}
          size="small"
          onClick={() => this._addParagraph()}
        >
          {'Add New Contract'}
        </Button>
      </div>
    );
  }

  _renderParagraph(paragraph, index) {
    return (
      <Paragraph
        currentUser={this.props.currentUser}
        key={index}
        number={index}
        paragraph={paragraph}
        editParagraphs={(paragraph, index) =>
          this._editParagraphs(paragraph, index)
        }
        deleteParagraph={index => this._deleteParagraph(index)}
      />
    );
  }

  render() {
    if (!this.props.state || !this.props.county) {
      return null;
    }
    const {tab} = this.state;
    return (
      <Paper
        className="col-lg-10 col-md-10 col-xs-10"
        style={styles.mainContainer}
      >
        <Paper style={{minHeight: '400px'}}>
          <AppBar position="static" color="primary">
            <Tabs
              value={tab}
              onChange={(e, v) => this._tabChange(v)}
              fullWidth
              indicatorColor={cyan[300]}
            >
              <Tab label="State" />
              <Tab label="County" />
            </Tabs>
          </AppBar>
          <div style={styles.paragraphContainer}>
            {tab === 0 &&
              this.props.state.map((paragraph, index) =>
                this._renderParagraph(paragraph, index)
              )}
            {tab === 1 &&
              this.props.county.map((paragraph, index) =>
                this._renderParagraph(paragraph, index)
              )}
          </div>
          {this._renderBtn()}
        </Paper>
      </Paper>
    );
  }
}

Layout.propTypes = {
  currentUser: PropTypes.object,
  state: PropTypes.array,
  county: PropTypes.array,
  editContracts: PropTypes.func,
  deleteContracts: PropTypes.func,
  addContracts: PropTypes.func,
};

const styles = {
  mainContainer: {
    height: '600px',
    paddingTop: '20px',
    overflow: 'scroll',
    paddingBottom: '20px',
  },

  btnContainer: {
    display: 'flex',
    justifyContent: 'space-around',
  },

  paragraphContainer: {marginTop: '10px', padding: '20px', minHeight: '170px'},
};
