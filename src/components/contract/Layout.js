import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import {cloneDeep} from 'lodash';
import Typography from 'material-ui/Typography';

import Paragraph from '../shared/Paragraph';
import ContactForm from '../shared/ContactForm';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 0,
      open: false,
    };
  }

  _handleClose() {
    this.setState({open: false});
  }

  _tabChange(v) {
    this.setState({tab: v});
  }

  _editParagraphs(paragraph, index) {
    const {contracts} = this.props;
    const updatedParagraphs = cloneDeep(contracts);
    updatedParagraphs[index] = paragraph;
    this.props.editContracts(updatedParagraphs);
  }

  _deleteParagraph(index) {
    const {contracts} = this.props;
    const updatedParagraphs = cloneDeep(contracts);
    updatedParagraphs.splice(index, 1);
    this.props.deleteContracts(updatedParagraphs);
  }

  _addParagraph() {
    const {contracts} = this.props;
    const updatedParagraphs = cloneDeep(contracts);
    updatedParagraphs.push(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    );
    this.props.addContracts(updatedParagraphs);
  }

  _renderBtn() {
    if (!this.props.currentUser) {
      return (
        <div style={styles.btnContainer}>
          <Button
            variant="raised"
            size="small"
            onClick={() => this.setState({open: true})}
          >
            {'Contact Us'}
          </Button>
        </div>
      );
    }
    return (
      <div style={styles.btnContainer}>
        <Button
          variant="flat"
          size="small"
          color="primary"
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
      >
        <li>{paragraph}</li>
      </Paragraph>
    );
  }

  render() {
    return (
      <Paper
        className="col-lg-10 col-md-10 col-xs-10"
        style={styles.mainContainer}
      >
        <Typography variant="headline" component="h3">
          {'Contracts'}
        </Typography>
        <div style={styles.paragraphContainer}>
          {this.props.contracts.map((paragraph, index) =>
            this._renderParagraph(paragraph, index)
          )}
        </div>
        {this._renderBtn()}
        <ContactForm
          open={this.state.open}
          handleClose={() => this._handleClose()}
        />
      </Paper>
    );
  }
}

Layout.propTypes = {
  currentUser: PropTypes.object,
  contracts: PropTypes.array,
  editContracts: PropTypes.func,
  deleteContracts: PropTypes.func,
  addContracts: PropTypes.func,
};

const styles = {
  mainContainer: {
    height: '600px',
    paddingTop: '20px',
    overflow: 'auto',
    paddingBottom: '20px',
  },

  btnContainer: {
    display: 'flex',
    justifyContent: 'space-around',
  },

  paragraphContainer: {marginTop: '10px', padding: '20px', minHeight: '170px'},
};
