import React from "react";
import PropTypes from "prop-types";
import { Paper, Button, Typography, Divider } from "material-ui";
import { cloneDeep } from "lodash";

import Paragraph from "../shared/Paragraph";
import ContactForm from "../shared/ContactForm";

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 0,
      open: false,
    };
  }

  _handleClose() {
    this.setState({ open: false });
  }

  _tabChange(v) {
    this.setState({ tab: v });
  }

  _editParagraphs(paragraph, index, type) {
    const contracts = cloneDeep(this.props[type]);
    contracts[index] = paragraph;
    this.props.editContracts(contracts, type);
  }

  _deleteParagraph(index, type) {
    const contracts = cloneDeep(this.props[type]);
    contracts.splice(index, 1);
    this.props.deleteContracts(contracts, type);
  }

  _addParagraph(type) {
    const contracts = cloneDeep(this.props[type]);
    contracts.push(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    );
    this.props.addContracts(contracts, type);
  }

  _renderBtn(type) {
    if (!this.props.currentUser) {
      return (
        <div style={styles.btnContainer}>
          <Button
            variant="raised"
            size="small"
            onClick={() => this.setState({ open: true })}
          >
            {"Contact Us"}
          </Button>
        </div>
      );
    }
    return (
      <div style={styles.btnContainer}>
        <Button
          variant="flat"
          size="small"
          color="primary"
          onClick={() => this._addParagraph(type)}
        >
          {type === "stateContracts"
            ? "Add State Contract"
            : "Add County Contract"}
        </Button>
      </div>
    );
  }

  _renderParagraph(paragraph, index, type) {
    return (
      <Paragraph
        currentUser={this.props.currentUser}
        key={index}
        number={index}
        paragraph={paragraph}
        editParagraphs={(paragraph, index) =>
          this._editParagraphs(paragraph, index, type)
        }
        deleteParagraph={index => this._deleteParagraph(index, type)}
      >
        <li>{paragraph}</li>
      </Paragraph>
    );
  }

  render() {
    return (
      <Paper
        className="col-lg-10 col-md-10 col-xs-10"
        style={styles.mainContainer}
      >
        <Typography variant="headline" component="h3">
          {"State Contracts"}
        </Typography>
        <div style={styles.paragraphContainer}>
          {this.props.stateContracts.map((paragraph, index) =>
            this._renderParagraph(paragraph, index, "stateContracts")
          )}
        </div>
        {this.props.currentUser && this._renderBtn("stateContracts")}

        <Divider />

        <Typography
          variant="headline"
          component="h3"
          style={{ marginTop: "20px" }}
        >
          {"County Contracts"}
        </Typography>
        <div style={styles.paragraphContainer}>
          {this.props.countyContracts.map((paragraph, index) =>
            this._renderParagraph(paragraph, index, "countyContracts")
          )}
        </div>
        {this._renderBtn("countyContracts")}
        <ContactForm
          open={this.state.open}
          handleClose={() => this._handleClose()}
        />
      </Paper>
    );
  }
}

Layout.propTypes = {
  currentUser: PropTypes.object,
  stateContracts: PropTypes.array,
  countyContracts: PropTypes.array,
  editContracts: PropTypes.func,
  deleteContracts: PropTypes.func,
  addContracts: PropTypes.func,
};

const styles = {
  mainContainer: {
    height: "600px",
    paddingTop: "20px",
    overflow: "auto",
    paddingBottom: "20px",
  },

  btnContainer: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "10px",
  },

  paragraphContainer: {
    margin: "10px auto 20px auto",
    padding: "20px 20px 0px 20px",
  },
};
