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

export default class ContactForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      msg: '',
    }
  }
  handleChange(name){
    return event => {
      this.setState({
        [name]: event.target.value,
      });
    };
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
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange("name")}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange("email")}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="phone"
            label="Phone"
            type="text"
            value={this.state.phone}
            onChange={this.handleChange("phone")}
            fullWidth
          />
          <TextField
            autoFocus
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
              onClick={this.props.handleClose}>
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