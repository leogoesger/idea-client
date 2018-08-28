import React from "react";
import PropTypes from "prop-types";
import ExpansionPanel, {
  ExpansionPanelDetails,
  ExpansionPanelSummary,
} from "material-ui/ExpansionPanel";
import Typography from "material-ui/Typography";
import EditIcon from "material-ui-icons/Edit";
import DeleteIcon from "material-ui-icons/Delete";
import Tooltip from "material-ui/Tooltip";
import ExpandMoreIcon from "material-ui-icons/ExpandMore";
import IconButton from "material-ui/IconButton";

import EditExpansionDialog from "./EditExpansionDialog";

// Title and Subtile with Array coming in
// Props, expanded, data, titleName, subtitleName,
export default class EditExpansion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDialogOpen: false,
      expanded: true,
      service: null,
    };
  }

  componentWillReceiveProps() {
    this.setState({ expanded: false });
  }

  _handlePanelExpand() {
    this.setState({ expanded: !this.state.expanded });
  }

  _renderSubtitles() {
    return this.props.data[this.props.subtitleName].map((subtitle, index) => {
      return (
        <Typography key={index} variant="body1" component="p">
          <li style={{ padding: "0px" }}>{subtitle.title}</li>
        </Typography>
      );
    });
  }

  _renderBtns(service, index) {
    if (this.props.currentUser) {
      return (
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Tooltip title="Edit">
            <IconButton
              style={styles.iconBtn}
              onClick={() =>
                this.setState({
                  isDialogOpen: true,
                  service: service,
                  number: index,
                })
              }
            >
              <EditIcon style={styles.editIcon} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton style={styles.iconBtn}>
              <DeleteIcon
                style={styles.editIcon}
                onClick={() => this.props.deleteData()}
              />
            </IconButton>
          </Tooltip>
        </div>
      );
    }
  }

  render() {
    if (!this.props.data) {
      return null;
    }
    return (
      <ExpansionPanel
        expanded={this.state.expanded}
        onChange={() => this._handlePanelExpand()}
      >
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="title">
            {this.props.data[this.props.titleName]}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div style={{ paddingLeft: "10px" }}>{this._renderSubtitles()}</div>
          {this._renderBtns()}
        </ExpansionPanelDetails>
        <EditExpansionDialog
          open={this.state.isDialogOpen}
          handleClose={() => this.setState({ isDialogOpen: false })}
          dataObject={this.props.data}
          currentUser={this.props.currentUser}
          saveObject={data => this.props.editData(data)}
        />
      </ExpansionPanel>
    );
  }
}

EditExpansion.propTypes = {
  data: PropTypes.object,
  titleName: PropTypes.string,
  subtitleName: PropTypes.string,
  currentUser: PropTypes.object,
  editData: PropTypes.func,
  deleteData: PropTypes.func,
};

const styles = {
  mainContainer: { height: "500px", overflow: "scroll" },
};
