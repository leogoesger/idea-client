import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import {cloneDeep} from 'lodash';

import Paragraph from './Paragraph';
import {Colors} from '../../styles';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      open: false,
    };
  }

  _editParagraphs(paragraph, index) {
    const updatedParagraphs = cloneDeep(this.props.paragraphs);
    updatedParagraphs[index] = paragraph;
    this.props.editParagraphs(updatedParagraphs);
  }

  _deleteParagraph(index) {
    const updatedParagraphs = cloneDeep(this.props.paragraphs);
    updatedParagraphs.splice(index, 1);
    this.props.deleteParagraph(updatedParagraphs);
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

  render() {
    return (
      <Paper
        className="col-lg-10 col-md-10 col-xs-10"
        style={styles.mainContainer}
      >
        <Typography variant="headline" component="h3">
          {'About Us'}
        </Typography>
        {this.props.paragraphs.map((paragraph, index) =>
          this._renderParagraph(paragraph, index)
        )}
        <div style={styles.btnContainer}>
          <Button variant="raised" style={styles.addBtn} size="small">
            {'Add New Paragraph'}
          </Button>
        </div>
      </Paper>
    );
  }
}

Layout.propTypes = {
  paragraphs: PropTypes.array,
  editParagraphs: PropTypes.func,
  deleteParagraph: PropTypes.func,
};

const styles = {
  mainContainer: {
    minHeight: '600px',
    paddingTop: '20px',
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
