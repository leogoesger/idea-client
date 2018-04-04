import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

import LoginForm from './LoginForm';
import {Colors} from '../../styles';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      open: false,
    };
  }

  render() {
    return (
      <Paper
        className="col-lg-10 col-md-10 col-xs-10"
        style={styles.mainContainer}
      >
        <div
          style={{marginTop: '40px'}}
          className="col-lg-5 col-md-5 col-xs-10"
        >
          <Typography variant="headline" component="h3">
            {'Login'}
          </Typography>
          <Typography style={styles.subTitle}>
            {'Please enter in with email and password'}
          </Typography>
          <LoginForm />
          <div style={styles.btnContainer}>
            <Button
              variant="raised"
              size="small"
              onClick={() => this._addParagraph()}
            >
              {'Submit'}
            </Button>
          </div>
        </div>
      </Paper>
    );
  }
}

Layout.propTypes = {
  error: PropTypes.string,
  users: PropTypes.array,
  createUser: PropTypes.func,
  createUserError: PropTypes.func,
  fetchingStatus: PropTypes.bool,
  currentUser: PropTypes.object,
  fetchUser: PropTypes.func,
};

const styles = {
  mainContainer: {
    minHeight: '600px',
    paddingTop: '20px',
    display: 'flex',
    justifyContent: 'space-around',
  },
  subTitle: {
    color: Colors.offBlack,
    marginTop: '5px',
  },
  btnContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '20px',
  },
};
