import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import {cloneDeep} from 'lodash';

import Paragraph from './Paragraph';
import {Colors} from '../../styles';
import { TextField } from 'material-ui';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
    };
  }

  handleChange(name){ 
    return (event => {
      this.setState({
        [name]: event.target.value,
      });
    });
  }

  _editParagraphs(paragraph, index) {
    const updatedParagraphs = cloneDeep(this.props.paragraphs);
    updatedParagraphs[index] = paragraph;
    this.props.editParagraphs(updatedParagraphs);
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
          {'Contact'}
        </Typography>
        {this.props.paragraphs.map((paragraph, index) =>
          this._renderParagraph(paragraph, index)
        )}
        <form>
          <TextField 
            id="name"
            label="Name"
            value={this.state.name}
            onChange={this.handleChange('name')}
            /><br />
          <TextField 
            id="email"
            label="Email"
            value={this.state.email}
            onChange={this.handleChange('email')}
            /><br />
            <TextField 
            id="phone"
            label="Phone"
            value={this.state.phone}
            onChange={this.handleChange('phone')}
            />
        </form>
      </Paper>
    );
  }
}

Layout.propTypes = {
  paragraphs: PropTypes.array,
  editParagraphs: PropTypes.func,
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
