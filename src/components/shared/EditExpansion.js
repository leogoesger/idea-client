import React from 'react';
import PropTypes from 'prop-types';
import ExpansionPanel, {
  ExpansionPanelDetails,
  ExpansionPanelSummary,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import EditIcon from 'material-ui-icons/Edit';
import DeleteIcon from 'material-ui-icons/Delete';
import Tooltip from 'material-ui/Tooltip';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import IconButton from 'material-ui/IconButton';
import {cloneDeep} from 'lodash';
import Button from 'material-ui/Button';

import Paragraph from './Paragraph';
import EditExpansionDialog from './EditExpansionDialog';

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
    this.setState({expanded: false});
  }

  // _edit(data, number) {
  //   this.setState({isDialogOpen: false});
  //   const newData = cloneDeep(this.props.data);
  //   if (!number && number !== 0) {
  //     newData[this.props.titleName] = data;
  //     return this.props.editData(newData, this.props.number);
  //   }
  //   newData[this.props.subtitleName][number] = data;
  //   return this.props.editData(newData, this.props.number);
  // }
  //
  // _deleteService(number) {
  //   const serviceInfo = cloneDeep(this.props.serviceInfo);
  //   if (this.props.tab == 'overviewServices') {
  //     serviceInfo.services.splice(number, 1);
  //     return this.props.deleteService(serviceInfo, this.props.tab);
  //   }
  //   serviceInfo.splice(number, 1);
  //   this.props.deleteService(serviceInfo, this.props.tab);
  // }
  //
  // _addService() {
  //   const serviceInfo = cloneDeep(this.props.serviceInfo);
  //   if (this.props.tab == 'overviewServices') {
  //     serviceInfo.services.push(
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  //     );
  //     return this.props.addService(serviceInfo, this.props.tab);
  //   }
  //   const length = serviceInfo.length,
  //     newService = {
  //       description: 'New Service Description',
  //       services: ['New Service Item 1', 'New Service Item 2'],
  //     };
  //   serviceInfo.push(newService);
  //   this.props.addService(serviceInfo, this.props.tab);
  //   this.setState({isDialogOpen: true, number: length, service: newService});
  // }
  // <EditExpansionDialog
  //   open={this.state.isDialogOpen}
  //   handleClose={() => this.setState({isDialogOpen: false})}
  //   serviceObject={this.state.service}
  //   number={this.state.number}
  //   editService={(service, number) => this._editService(service, number)}
  //   deleteService={(service, number) =>
  //     this._deleteService(service, number)
  //   }
  // />

  _handlePanelExpand() {
    this.setState({expanded: !this.state.expanded});
  }

  _renderSubtitles() {
    return this.props.data[this.props.subtitleName].map((subtitle, index) => {
      return (
        <Typography key={index} variant="body1" component="p">
          {subtitle.title}
        </Typography>
      );
    });
  }

  _renderBtns(service, index) {
    if (this.props.currentUser) {
      return (
        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
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
                onClick={() => this._deleteService(index)}
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
          <div style={{paddingLeft: '10px'}}>{this._renderSubtitles()}</div>
          {this._renderBtns()}
        </ExpansionPanelDetails>
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
  addData: PropTypes.func,
};

const styles = {
  mainContainer: {height: '500px', overflow: 'scroll'},
  btnContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '20px',
    marginBottom: '20px',
  },
};
