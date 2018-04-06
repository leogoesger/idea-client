import React from 'react';
import PropTypes from 'prop-types';
import ExpansionPanel, {
  ExpansionPanelDetails,
  ExpansionPanelSummary,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';

export default class ServiceTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: null,
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

  render() {
    if (!this.props.serviceInfo) {
      return null;
    }
    return <div style={styles.mainContainer}>{this._renderServiceCards()}</div>;
  }
}

ServiceTab.propTypes = {
  serviceInfo: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  currentUser: PropTypes.object,
};

const styles = {
  mainContainer: {height: '430px', overflow: 'scroll'},
};
