import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

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

  _renderParagraphs(paragraphs) {
    return paragraphs.map((paragraph, index) => (
      <Paragraph key={index} paragraph={paragraph} />
    ));
  }

  render() {
    return (
      <Paper
        className="col-lg-10 col-md-10 col-xs-12"
        style={styles.mainContainer}
      >
        <Typography variant="headline" component="h3">
          {'About Us'}
        </Typography>
        {this._renderParagraphs(this.props.paragraphs)}
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
};

const styles = {
  mainContainer: {
    marginLeft: '100px',
    minHeight: '450px',
    marginTop: '120px',
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
