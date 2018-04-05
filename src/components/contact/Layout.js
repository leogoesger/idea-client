import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import {cloneDeep} from 'lodash';

import Button from 'material-ui/Button'
import ContactForm from './ContactForm'
import Paragraph from '../shared/Paragraph';
import {Colors} from '../../styles';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleClose(){
    this.setState({open: false})
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
        currentUser={this.props.currentUser}
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
        <div style={styles.btnContainer}>
          <Button 
            onClick={()=>this.setState({open: true})}
            variant="raised"
            size="small"
            >Contact Us</Button>
        </div>
        <ContactForm open={this.state.open} handleClose={()=>this.handleClose()}/>
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
