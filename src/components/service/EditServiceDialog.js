import React from "react";
import PropTypes from "prop-types";
import { Button, Dialog, DialogTitle } from "material-ui";
import { cloneDeep } from "lodash";

import Tooltip from "material-ui/Tooltip";
import Paragraph from "../shared/Paragraph";
import TextField from "material-ui/TextField";
import Divider from "material-ui/Divider";
import ArrowUp from "material-ui-icons/KeyboardArrowUp";
import ArrowDown from "material-ui-icons/KeyboardArrowDown";

export default class EditServiceDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { description: null, services: null };
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
      return this.setState({ services: newServices });
    }
    this.setState({ description: e.target.value });
  }

  _editSubService(info, serviceIndex, subServiceIndex, attribute) {
    const updatedServices = cloneDeep(this.state.services);
    updatedServices[serviceIndex].subServices[subServiceIndex][
      attribute
    ] = info;
    this.setState({ services: updatedServices });
  }

  _addSubService(serviceIndex) {
    const updatedServices = cloneDeep(this.state.services);
    updatedServices[serviceIndex].subServices.push({
      name: "New Report",
      url: "https://google.com",
    });
    this.setState({ services: updatedServices });
  }

  _deleteSubService(serviceIndex, subServiceIndex) {
    const updatedServices = cloneDeep(this.state.services);
    updatedServices[serviceIndex].subServices.splice(subServiceIndex, 1);
    this.setState({ services: updatedServices });
  }

  _editParagraphs(paragraph, index, attribute) {
    const updatedServices = cloneDeep(this.state.services);
    updatedServices[index][attribute] = paragraph;
    this.setState({ services: updatedServices });
  }

  _deleteParagraph(index) {
    const updatedServices = cloneDeep(this.state.services);
    updatedServices.splice(index, 1);
    this.setState({ services: updatedServices });
  }

  _addParagraph() {
    const updatedServices = cloneDeep(this.state.services);
    updatedServices.push({
      description: "New Description",
      url: "https://google.com",
      subServices: [{ name: "New Report", url: "https://google.com" }],
    });
    this.setState({ services: updatedServices });
  }

  _isMultiline(service) {
    return service.length > 100 ? true : false;
  }

  _handleClose() {
    if (this.props.serviceObject.description === "New Service Description") {
      this.props.deleteService(this.props.number);
      return this.props.handleClose();
    }
    return this.props.handleClose();
  }

  _handleSwap(index, type) {
    const { services } = this.state;
    const holderIndex = type === "plus" ? index - 1 : index + 1;
    if (holderIndex < 0 || holderIndex > services.length - 1) {
      return null;
    }
    const holder = services[holderIndex];
    services[holderIndex] = services[index];
    services[index] = holder;
    this.setState({ services });
  }

  _renderSubservices(subServices, serviceIndex) {
    return subServices.map((subService, index) => {
      return (
        <React.Fragment key={index}>
          <Paragraph
            currentUser={{ name: "" }}
            number={index}
            multiline={this._isMultiline(subService.name)}
            paragraph={subService.name}
            editParagraphs={(paragraph, index) =>
              this._editSubService(paragraph, serviceIndex, index, "name")
            }
            deleteParagraph={index =>
              this._deleteSubService(serviceIndex, index)
            }
          >
            <span style={{ float: "left" }}>
              <li>{subService.name}</li>
            </span>
          </Paragraph>
          <Paragraph
            currentUser={{ name: "" }}
            number={index}
            multiline={this._isMultiline(subService.url)}
            paragraph={subService.url}
            editParagraphs={(paragraph, index) =>
              this._editSubService(paragraph, serviceIndex, index, "url")
            }
          >
            <span style={{ paddingLeft: "20px", color: "#64b5f6" }}>
              {subService.url}
            </span>
          </Paragraph>
        </React.Fragment>
      );
    });
  }

  _renderServices(services) {
    if (services) {
      return services.map((service, index) => {
        return (
          <React.Fragment key={index}>
            <div>
              <div style={{ display: "flex" }}>
                <Tooltip title={"Move Up"}>
                  <ArrowUp
                    style={{
                      paddingTop: "3px",
                      cursor: index == 0 ? "not-allowed" : "pointer",
                    }}
                    onClick={() => this._handleSwap(index, "plus")}
                  />
                </Tooltip>
                <Tooltip title={"Move Up"}>
                  <ArrowDown
                    style={{
                      paddingTop: "3px",
                      cursor:
                        index === services.length - 1
                          ? "not-allowed"
                          : "pointer",
                    }}
                    onClick={() => this._handleSwap(index, "minus")}
                  />
                </Tooltip>
                <Paragraph
                  currentUser={{ name: "" }}
                  number={index}
                  multiline={this._isMultiline(service.description)}
                  paragraph={service.description}
                  editParagraphs={(paragraph, index) =>
                    this._editParagraphs(paragraph, index, "description")
                  }
                  deleteParagraph={index => this._deleteParagraph(index)}
                >
                  <span style={{ width: "400px" }}>{service.description}</span>
                </Paragraph>
              </div>
              <div style={{ paddingLeft: "24px" }}>
                <Paragraph
                  currentUser={{ name: "" }}
                  number={index}
                  multiline={this._isMultiline(service.url)}
                  paragraph={service.url}
                  editParagraphs={(paragraph, index) =>
                    this._editParagraphs(paragraph, index, "url")
                  }
                >
                  <span style={{ color: "#64b5f6" }}>{service.url}</span>
                </Paragraph>
              </div>
            </div>
            <div style={{ paddingLeft: "40px" }}>
              {this._renderSubservices(service.subServices, index)}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                cursor: "pointer",
                padding: "5px",
                fontSize: "14px",
                color: "#ef5350",
                marginBottom: "20px",
              }}
              onClick={() => this._addSubService(index)}
            >
              <Button
                variant="flat"
                color="primary"
                style={{
                  borderStyle: "solid",
                  borderWidth: "1px",
                  borderColor: "#e0e0e0",
                }}
              >
                Add New Report
              </Button>
            </div>
            <Divider />
          </React.Fragment>
        );
      });
    }
  }

  _renderActionBtns() {
    return (
      <div
        style={{
          width: "95%",
          display: "flex",
          justifyContent: "space-between",
          margin: "10px auto 60px auto",
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
            style={{ marginLeft: "10px" }}
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
        <div style={{ padding: "20px", width: "500px", margin: "0 auto" }}>
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
