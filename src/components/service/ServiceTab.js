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

import Paragraph from '../shared/Paragraph';
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
    if (this.props.tab == 'overviewServices') {
      if (!number && number !== 0) {
        serviceInfo.description = service;
        return this.props.editService(serviceInfo, this.props.tab);
      }
      serviceInfo.services[number] = service;
      return this.props.editService(serviceInfo, this.props.tab);
    }
    serviceInfo[number] = service;
    this.props.editService(serviceInfo, this.props.tab);
  }

  _deleteService(number) {
    const serviceInfo = cloneDeep(this.props.serviceInfo);
    if (this.props.tab == 'overviewServices') {
      serviceInfo.services.splice(number, 1);
      return this.props.deleteService(serviceInfo, this.props.tab);
    }
    serviceInfo.splice(number, 1);
    this.props.deleteService(serviceInfo, this.props.tab);
  }

  _addService() {
    const serviceInfo = cloneDeep(this.props.serviceInfo);
    if (this.props.tab == 'overviewServices') {
      serviceInfo.services.push(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
      );
      return this.props.addService(serviceInfo, this.props.tab);
    }
    const length = serviceInfo.length,
      newService = {
        description: 'New Service Description',
        services: [
          {
            description: 'Service Description 1',
            url: 'https://google.com',
            subServices: [
              {name: 'Report 1', url: 'https://google.com'},
              {name: 'Report 2', url: 'https://google.com'},
            ],
          },
          {
            description: 'Service Description 2',
            url: 'https://google.com',
            subServices: [
              {name: 'Report 1', url: 'https://google.com'},
              {name: 'Report 2', url: 'https://google.com'},
            ],
          },
        ],
      };
    serviceInfo.push(newService);
    this.props.addService(serviceInfo, this.props.tab);
    this.setState({isDialogOpen: true, number: length, service: newService});
  }

  _renderSubservices(subServices) {
    return subServices.map(subService => {
      if (subService.url) {
        return (
          <a href={subService.url} key={subService.name} target="_blank">
            <li type="circle">{subService.name}</li>
          </a>
        );
      }
      return (
        <li type="circle" key={subService.name}>
          {subService.name}
        </li>
      );
    });
  }

  _renderServices(services) {
    return services.map((service, index) => {
      if (service.url) {
        return (
          <div key={index} style={{marginBottom: '10px'}}>
            <a href={service.url} target="_blank">
              <li>{service.description}</li>
            </a>
            <div style={{marginLeft: '20px'}}>
              {this._renderSubservices(service.subServices)}
            </div>
          </div>
        );
      }
      return (
        <div key={index} style={{marginBottom: '10px'}}>
          <li>{service.description}</li>
        </div>
      );
    });
  }

  _renderOverviewServices(services) {
    return services.map((service, index) => {
      return (
        <Paragraph
          key={index}
          currentUser={this.props.currentUser}
          number={index}
          multiline={false}
          paragraph={service}
          editParagraphs={(paragraph, index) =>
            this._editService(paragraph, index)
          }
          deleteParagraph={index => this._deleteService(index)}
        >
          <li style={{float: 'left'}}>{service}</li>
        </Paragraph>
      );
    });
  }

  _renderOverviewCard() {
    return (
      <div style={{padding: '20px 20px 0px 20px'}}>
        <Paragraph
          currentUser={this.props.currentUser}
          number={null}
          multiline={true}
          paragraph={this.props.serviceInfo.description}
          editParagraphs={(paragraph, index) =>
            this._editService(paragraph, index)
          }
        >
          <span style={{fontSize: '16px'}}>
            {this.props.serviceInfo.description}
          </span>
        </Paragraph>

        <div style={{padding: '20px 20px 0px 20px'}}>
          {this._renderOverviewServices(this.props.serviceInfo.services)}
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

  _renderAddNewBtn() {
    if (this.props.currentUser) {
      return (
        <div style={styles.btnContainer}>
          <Button
            variant="flat"
            color="primary"
            size="small"
            onClick={() => this._addService()}
          >
            {'Add New Service'}
          </Button>
        </div>
      );
    }
  }

  _renderServiceCards() {
    if (!Array.isArray(this.props.serviceInfo)) {
      return this._renderOverviewCard();
    }
    return <div>{this._renderStateOrCountyCard()}</div>;
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
          deleteService={(service, number) =>
            this._deleteService(service, number)
          }
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
        {this._renderAddNewBtn()}
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
  mainContainer: {height: '500px', overflow: 'scroll'},
  btnContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '20px',
    marginBottom: '20px',
  },
};
