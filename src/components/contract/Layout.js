import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Tabs, {Tab} from 'material-ui/Tabs'
import Button from 'material-ui/Button';
import {cloneDeep} from 'lodash';

import Paragraph from '../home/Paragraph'
import {Colors} from '../../styles';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 0,
    };
  }

  _tabChange(v){
    this.setState({tab: v});
  }

  _renderParagraph(paragraph, index) {
    return (
      <Paragraph
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

  _editParagraphs(paragraph, index) {
    const {tab} = this.state;
    const {state, county} = this.props;
    const updatedParagraphs = cloneDeep(tab === 0 ? state : county);
    const otherParagraphs = cloneDeep(tab === 1 ? state : county);
    updatedParagraphs[index] = paragraph;
    if(tab === 0)
      this.props.editContracts({state: updatedParagraphs, county: otherParagraphs});
    else
      this.props.editContracts({county: updatedParagraphs, state: otherParagraphs});
      
  }

  _deleteParagraph(index) {
    const {tab} = this.state;
    const {state, county} = this.props;
    const updatedParagraphs = cloneDeep(tab === 0 ? state : county);
    const otherParagraphs = cloneDeep(tab === 1 ? state : county);
    updatedParagraphs.splice(index, 1);
    if(tab === 0)
      this.props.deleteContracts({state: updatedParagraphs, county: otherParagraphs});
    else
      this.props.deleteContracts({county: updatedParagraphs, state: otherParagraphs});
    }

  _addParagraph() {
    const {tab} = this.state;
    const {state, county} = this.props;
    const updatedParagraphs = cloneDeep(tab === 0 ? state : county);
    const otherParagraphs = cloneDeep(tab === 1 ? state : county);
    updatedParagraphs.push(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    );
    if(tab === 0)
      this.props.addContracts({state: updatedParagraphs, county: otherParagraphs});
    else
      this.props.addContracts({county: updatedParagraphs, state: otherParagraphs});
      
  }

        

  render() {
    const {tab} = this.state;
    return (
      <Paper
        className="col-lg-10 col-md-10 col-xs-10"
        style={styles.mainContainer}
      >
        <Typography variant="headline" component="h3">
          {'Contracts'}
        <Tabs value={tab} onChange={(e, v) => this._tabChange(v)}>
          <Tab label="State" />
          <Tab label="County" />
        </Tabs>
        </Typography>
        {tab === 0 && this.props.state.map((paragraph, index) =>
          this._renderParagraph(paragraph, index)
        )}
        {tab === 1 && this.props.county.map((paragraph, index) =>
          this._renderParagraph(paragraph, index)
        )}
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
      </Paper>
    );
  }
}

Layout.propTypes = {
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

  addBtn: {
    backgroundColor: Colors.red,
    color: 'white',
  },
  btnContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '20px',
  },
};

