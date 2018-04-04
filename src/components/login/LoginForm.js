import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

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
      </div>
    );
  }
}

LoginForm.propTypes = {
  error: PropTypes.string,
  users: PropTypes.array,
  createUser: PropTypes.func,
  createUserError: PropTypes.func,
  fetchingStatus: PropTypes.bool,
  currentUser: PropTypes.object,
  fetchUser: PropTypes.func,
};
