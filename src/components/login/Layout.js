import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';

import LoginForm from './LoginForm';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.error) {
      this.setState({open: true});
    }
  }

  handleClose() {
    this.setState({open: false});
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
          <Typography variant="display1">
            {'Please enter in with email and password'}
          </Typography>
          <LoginForm
            loginUser={user => this.props.loginUser(user)}
            error={this.props.error}
          />
        </div>
        <Snackbar
          open={this.state.open}
          autoHideDuration={3000}
          onClose={() => this.handleClose()}
          SnackbarContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{this.props.error}</span>}
          action={
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={() => this.handleClose()}
            >
              <CloseIcon />
            </IconButton>
          }
        />
      </Paper>
    );
  }
}

Layout.propTypes = {
  loginUser: PropTypes.func,
  error: PropTypes.string,
};

const styles = {
  mainContainer: {
    minHeight: '600px',
    paddingTop: '20px',
    display: 'flex',
    justifyContent: 'space-around',
  },
};
