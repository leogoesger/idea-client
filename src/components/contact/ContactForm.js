import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  // DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import Input, {InputLabel} from 'material-ui/Input';
import {FormHelperText} from 'material-ui/Form'
import MaskedInput from 'react-text-mask';

import {
  getEmailErrorMessage,
  getPhoneErrorMessage,
} from '../../utils/helpers';


function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}


TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

export default class ContactForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '(   )    -    ',
      msg: '',
    }
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
  handleChange(name){
    return event => {
      this.setState({
        [name]: event.target.value,
      });
    };
  }
  handleSubmit(){

  } 
  render(){
    return(
      <Dialog
        open={this.props.open}
        onClose={this.props.handleClose}
        aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Contact Form</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send
            updates occationally.
          </DialogContentText> */}
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
          <FormHelperText>{getPhoneErrorMessage(this.state.phone)}</FormHelperText>
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
          <form style={{display:'none'}} id='contact-form' action="mailto:youraddr@domain.tld" method="GET" encType="multipart/form-data">
              <input name="subject" type="text" value={this.state.name}/>
              <textarea name="body" value={this.state.msg}></textarea>
              <input type="submit" value="Send" />
          </form>
        </DialogContent>
        <DialogActions>
          <Button             
              variant="raised"
              size="small"
              onClick={this.props.handleClose}>
            Cancel
          </Button>
          <Button 
            variant="raised"
            size="small"
            disabled={this._isDisabledBtn()}
            onClick={()=>document.getElementById('contact-form').submit()}>
                Submit
          </Button>
        </DialogActions>
        
      </Dialog>
    );
  }
}

ContactForm.propTypes = {
    handleClose: PropTypes.func,
    open: PropTypes.bool,
}