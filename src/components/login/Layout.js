import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import LoginForm from './LoginForm';

export default class Layout extends React.Component {
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
          <Typography variant="display1">
            {'Please enter in with email and password'}
          </Typography>
          <LoginForm
            loginUser={user => this.props.loginUser(user)}
            error={this.props.error}
          />
        </div>
      </Paper>
    );
  }
}

Layout.propTypes = {
  loginUser: PropTypes.func,
  error: PropTypes.object,
};

const styles = {
  mainContainer: {
    minHeight: '600px',
    paddingTop: '20px',
    display: 'flex',
    justifyContent: 'space-around',
  },
};
