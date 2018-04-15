import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import {cloneDeep} from 'lodash';

import Button from 'material-ui/Button';
import ContactForm from '../shared/ContactForm';
import Paragraph from '../shared/Paragraph';
import {Colors} from '../../styles';

import MapImage from '../../static/map.png';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  _handleClose() {
    this.setState({open: false});
  }

  handleChange(name) {
    return event => {
      this.setState({
        [name]: event.target.value,
      });
    };
  }

  _editParagraphs(paragraph, index) {
    const updatedParagraphs = cloneDeep(this.props.paragraphs);
    updatedParagraphs[index] = paragraph;
    this.props.editParagraphs(updatedParagraphs);
  }

  _renderParagraph(paragraph, index) {
    const split = paragraph.split('\n');
    return (
      <Paragraph
        currentUser={this.props.currentUser}
        key={index}
        number={index}
        paragraph={paragraph}
        editParagraphs={(paragraph, index) =>
          this._editParagraphs(paragraph, index)
        }
        multiline
      >
        <span>
          {split.map((s, i) => (
            <span key={i}>
              <br />
              {s}
            </span>
          ))}
        </span>
      </Paragraph>
    );
  }

  render() {
    return (
      <Paper
        className="col-lg-10 col-md-10 col-xs-10"
        style={styles.mainContainer}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <Typography variant="headline" component="h3">
              {'Contact'}
            </Typography>
            {this.props.paragraphs.map((paragraph, index) =>
              this._renderParagraph(paragraph, index)
            )}
          </div>

          <div>
            <img src={MapImage} height="400" width="500" />
          </div>
        </div>
        <div style={styles.btnContainer}>
          <Button
            onClick={() => this.setState({open: true})}
            variant="raised"
            size="small"
          >
            Contact Us
          </Button>
        </div>
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
  paragraphs: PropTypes.array,
  editParagraphs: PropTypes.func,
};

const styles = {
  mainContainer: {
    height: '600px',
    paddingTop: '20px',
    overflow: 'auto',
    paddingBottom: '20px',
  },

  addBtn: {
    backgroundColor: Colors.red,
    color: 'white',
  },
  btnContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '60px',
  },
};
