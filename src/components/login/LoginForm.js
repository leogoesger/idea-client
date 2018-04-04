import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      open: false,
    };
  }

  render() {
    return (
      <div>
        <TextField
          fullWidth
          id="with-placeholder"
          label="Email"
          placeholder="john@gmail.com"
          margin="normal"
        />
        <TextField
          fullWidth
          id="with-placeholder"
          label="Password"
          placeholder="Password"
          margin="normal"
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
