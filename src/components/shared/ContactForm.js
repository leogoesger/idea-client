import React from "react";
import PropTypes from "prop-types";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";
import Dialog, {
  DialogActions,
  DialogContent,
  // DialogContentText,
  DialogTitle,
} from "material-ui/Dialog";
import Input, { InputLabel } from "material-ui/Input";
import { FormHelperText } from "material-ui/Form";
import MaskedInput from "react-text-mask";
import request from "superagent";

import Snackbar from "material-ui/Snackbar";
import IconButton from "material-ui/IconButton";
import CloseIcon from "material-ui-icons/Close";

import {
  getEmailErrorMessage,
  getPhoneErrorMessage,
} from "../../utils/helpers";

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={[
        "(",
        /[1-9]/,
        /\d/,
        /\d/,
        ")",
        " ",
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
      ]}
      placeholderChar={"\u2000"}
      showMask
    />
  );
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "(   )    -    ",
      msg: "",
      message: "",
    };
  }

  _isDisabledBtn() {
    if (!this.state.email) {
      return true;
    }
    return !!(
      getEmailErrorMessage(this.state.email) ||
      getPhoneErrorMessage(this.state.phone)
    );
  }

  handleChange(name) {
    return event => {
      this.setState({
        [name]: event.target.value,
      });
    };
  }

  handleClose() {
    this.setState({ open: false });
    this.props.handleClose();
  }

  async _submit() {
    var message;
    try {
      message = await request
        .post(`${process.env.SERVER_ADDRESS}/submit`)
        .send(this.state);
    } catch (e) {
      throw e;
    }
    this.setState({ open: true, message: message.text });
  }

  render() {
    return (
      <Dialog
        open={this.props.open}
        onClose={this.props.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Contact Us</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            id="name"
            label="Name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange("name")}
            fullWidth
          />
          <TextField
            margin="dense"
            id="email"
            label="Email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange("email")}
            fullWidth
            helperText={getEmailErrorMessage(this.state.email)}
          />
          <InputLabel htmlFor="phone">Phone</InputLabel>
          <Input
            id="phone"
            value={this.state.phone}
            onChange={this.handleChange("phone")}
            inputComponent={TextMaskCustom}
            fullWidth
          />
          <FormHelperText>
            {getPhoneErrorMessage(this.state.phone)}
          </FormHelperText>
          <TextField
            margin="dense"
            id="msg"
            label="Message"
            type="text"
            value={this.state.msg}
            onChange={this.handleChange("msg")}
            multiline
            rows={4}
            fullWidth
          />
        </DialogContent>
        <DialogActions style={{ marginBottom: "25px", marginRight: "18px" }}>
          <Button
            variant="flat"
            color="primary"
            onClick={this.props.handleClose}
          >
            Cancel
          </Button>
          <Button
            variant="raised"
            disabled={this._isDisabledBtn()}
            onClick={() => this._submit()}
          >
            Submit
          </Button>
        </DialogActions>
        <Snackbar
          open={this.state.open}
          autoHideDuration={3000}
          onClose={() => this.handleClose()}
          SnackbarContentProps={{
            "aria-describedby": "message-id",
          }}
          message={<span id="message-id">{this.state.message}</span>}
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
      </Dialog>
    );
  }
}

ContactForm.propTypes = {
  handleClose: PropTypes.func,
  open: PropTypes.bool,
};
