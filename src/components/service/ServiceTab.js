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

import EditServiceDialog from './EditServiceDialog';

export default class ServiceTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: null,
      isDialogOpen: false,
      number: null,
      service: null,
    };
  }

  componentWillReceiveProps() {
    this.setState({expanded: null});
  }

  _handlePanelExpand(name) {
    if (this.state.expanded == name) {
      return this.setState({expanded: null});
    }
    this.setState({expanded: name});
  }

  _editService(service, number) {
    this.setState({isDialogOpen: false});
    const serviceInfo = cloneDeep(this.props.serviceInfo);
    serviceInfo[number] = service;
    this.props.editService(serviceInfo, this.props.tab);
  }

  _deleteService(number) {
    const serviceInfo = cloneDeep(this.props.serviceInfo);
    serviceInfo.splice(number, 1);
    this.props.deleteService(serviceInfo, this.props.tab);
  }

  _renderServices(services) {
    return services.map((service, index) => {
      return (
        <Typography key={index} variant="body1" component="p">
          {`${service}\n`}
        </Typography>
      );
    });
  }

  _renderOverviewCard() {
    return (
      <div style={{padding: '20px'}}>
        <Typography variant="title" component="div">
          {this.props.serviceInfo.description}
        </Typography>
        <div style={{padding: '20px'}}>
          {this._renderServices(this.props.serviceInfo.services)}
        </div>
      </div>
    );
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

  _renderStateOrCountyCard() {
    return this.props.serviceInfo.map((service, index) => {
      return (
        <ExpansionPanel
          key={index}
          expanded={this.state.expanded === `panel${index}`}
          onChange={() => this._handlePanelExpand(`panel${index}`)}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="title">{service.description}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div style={{paddingLeft: '10px'}}>
              {this._renderServices(service.services)}
            </div>
            {this._renderBtns(service, index)}
          </ExpansionPanelDetails>
        </ExpansionPanel>
      );
    });
  }

  _renderServiceCards() {
    if (!Array.isArray(this.props.serviceInfo)) {
      return this._renderOverviewCard();
    }
    return this._renderStateOrCountyCard();
  }

  _renderDialog() {
    if (this.state.service) {
      return (
        <EditServiceDialog
          open={this.state.isDialogOpen}
          handleClose={() => this.setState({isDialogOpen: false})}
          serviceObject={this.state.service}
          number={this.state.number}
          editService={(service, number) => this._editService(service, number)}
        />
      );
    }
  }
  render() {
    if (!this.props.serviceInfo) {
      return null;
    }
    return (
      <div style={styles.mainContainer}>
        {this._renderServiceCards()}
        {this._renderDialog()}
      </div>
    );
  }
}

ServiceTab.propTypes = {
  serviceInfo: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  currentUser: PropTypes.object,
  tab: PropTypes.string,
  editService: PropTypes.func,
  deleteService: PropTypes.func,
  addService: PropTypes.func,
};

const styles = {
  mainContainer: {height: '430px', overflow: 'scroll'},
};
