import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

import {
  getEmailErrorMessage,
  getPasswordErrorMessage,
} from '../../utils/helpers';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  _handleChange(e, property) {
    this.setState({
      [property]: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <TextField
          fullWidth
          value={this.state.email}
          label="Email"
          placeholder="john@gmail.com"
          margin="normal"
          onChange={e => this._handleChange(e, 'email')}
          helperText={getEmailErrorMessage(this.state.email)}
        />
        <TextField
          fullWidth
          value={this.state.password}
          type="password"
          label="Password"
          placeholder="Password"
          margin="normal"
          onChange={e => this._handleChange(e, 'password')}
          helperText={getPasswordErrorMessage(this.state.password)}
        />
        <div style={styles.btnContainer}>
          <Button
            variant="raised"
            size="small"
            onClick={() => this.props.loginUser(this.state)}
          >
            {'Submit'}
          </Button>
        </div>
      </div>
    );
  }
}

LoginForm.propTypes = {
  loginUser: PropTypes.func,
  error: PropTypes.object,
};

const styles = {
  btnContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '20px',
  },
};
