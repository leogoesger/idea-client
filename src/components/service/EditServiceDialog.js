import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Dialog, {DialogTitle} from 'material-ui/Dialog';
import {cloneDeep} from 'lodash';

import Paragraph from '../shared/Paragraph';
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
    if (index || index === 0) {
      const newServices = cloneDeep(this.state.services);
      newServices[index] = e.target.value;
      return this.setState({services: newServices});
    }
    this.setState({description: e.target.value});
  }

  _editParagraphs(paragraph, index, attribute) {
    const updatedServices = cloneDeep(this.state.services);
    updatedServices[index][attribute] = paragraph;
    this.setState({services: updatedServices});
  }

  _deleteParagraph(index) {
    const updatedServices = cloneDeep(this.state.services);
    updatedServices.splice(index, 1);
    this.setState({services: updatedServices});
  }

  _addParagraph() {
    const updatedServices = cloneDeep(this.state.services);
    updatedServices.push(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    );
    this.setState({services: updatedServices});
  }

  _isMultiline(service) {
    return service.length > 100 ? true : false;
  }

  _handleClose() {
    if (this.props.serviceObject.description === 'New Service Description') {
      this.props.deleteService(this.props.number);
      return this.props.handleClose();
    }
    return this.props.handleClose();
  }

  _renderServices(services) {
    if (services) {
      return services.map((service, index) => {
        return (
          <React.Fragment key={index}>
            <Paragraph
              currentUser={{name: ''}}
              number={index}
              multiline={this._isMultiline(service.description)}
              paragraph={service.description}
              editParagraphs={(paragraph, index) =>
                this._editParagraphs(paragraph, index, 'description')
              }
              deleteParagraph={index => this._deleteParagraph(index)}
            >
              <span>{service.description}</span>
            </Paragraph>
            <Paragraph
              currentUser={{name: ''}}
              number={index}
              multiline={this._isMultiline(service.url)}
              paragraph={service.url}
              editParagraphs={(paragraph, index) =>
                this._editParagraphs(paragraph, index, 'url')
              }
            >
              <span style={{paddingLeft: '20px', color: '#64b5f6'}}>
                {service.url}
              </span>
            </Paragraph>
          </React.Fragment>
        );
      });
    }
  }

  _renderActionBtns() {
    return (
      <div
        style={{
          width: '95%',
          display: 'flex',
          justifyContent: 'space-between',
          margin: '10px auto 20px auto',
        }}
      >
        <div>
          <Button
            variant="flat"
            color="primary"
            onClick={() => this._handleClose()}
          >
            Cancel
          </Button>
        </div>
        <div>
          <Button
            variant="flat"
            color="primary"
            onClick={() => this._addParagraph()}
          >
            Add
          </Button>

          <Button
            style={{marginLeft: '10px'}}
            variant="raised"
            onClick={() =>
              this.props.editService(this.state, this.props.number)
            }
          >
            Save
          </Button>
        </div>
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
        onClose={() => this._handleClose()}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          <TextField
            value={this.state.description}
            label="Description"
            fullWidth
            onChange={e => this._handleTextChange(e, null)}
          />
        </DialogTitle>
        <div style={{padding: '20px', width: '500px', margin: '0 auto'}}>
          {this._renderServices(this.state.services)}
        </div>
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
  deleteService: PropTypes.func,
  number: PropTypes.number,
};
