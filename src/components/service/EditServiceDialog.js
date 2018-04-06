import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Dialog, {DialogContent, DialogTitle} from 'material-ui/Dialog';
import {cloneDeep} from 'lodash';

import TextField from 'material-ui/TextField';

export default class EditServiceDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {description: null, services: null};
  }

  componentDidMount() {
    this.setState({
      services: this.props.serviceObject.services,
      description: this.props.serviceObject.description,
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      services: nextProps.serviceObject.services,
      description: nextProps.serviceObject.description,
    });
  }

  _handleTextChange(e, index) {
    if (index) {
      const newServices = cloneDeep(this.state.services);
      newServices[index] = e.target.value;
      return this.setState({services: newServices});
    }
    this.setState({description: e.target.value});
  }

  _renderServices(services) {
    if (services) {
      return services.map((service, index) => {
        return (
          <TextField
            key={index}
            value={service}
            label="Edit"
            onChange={e => this._handleTextChange(e, index)}
          />
        );
      });
    }
  }

  _renderActionBtns() {
    return (
      <div style={{display: 'flex', justifyContent: 'flex-end'}}>
        <Button variant="flat" color="primary" onClick={this.props.handleClose}>
          Cancel
        </Button>
        <Button
          variant="raised"
          onClick={() => this.props.editService(this.state, this.props.number)}
        >
          Submit
        </Button>
      </div>
    );
  }

  render() {
    if (!this.props.serviceObject) {
      return null;
    }
    return (
      <Dialog
        open={this.props.open}
        onClose={() => this.props.handleClose()}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          <TextField
            value={this.state.description}
            label="Edit"
            onChange={e => this._handleTextChange(e, null)}
          />
        </DialogTitle>
        <DialogContent>
          {this._renderServices(this.state.services)}
        </DialogContent>
        {this._renderActionBtns()}
      </Dialog>
    );
  }
}

EditServiceDialog.propTypes = {
  serviceObject: PropTypes.object,
  handleClose: PropTypes.func,
  open: PropTypes.bool,
  editService: PropTypes.func,
  number: PropTypes.number,
};
