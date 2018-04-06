import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import Tabs, {Tab} from 'material-ui/Tabs';
import Button from 'material-ui/Button';
import yellow from 'material-ui/colors/yellow';

import ContactForm from '../shared/ContactForm';
import ServiceTab from './ServiceTab';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 0,
      open: false,
    };
  }

  _getTabInfo(tab) {
    switch (tab) {
      case 0:
        return this.props.overviewServices;
      case 1:
        return this.props.stateServices;
      case 2:
        return this.props.countyServices;
    }
  }

  _handleClose() {
    this.setState({open: false});
  }

  _tabChange(v) {
    this.setState({tab: v});
  }

  _renderBtn() {
    if (!this.props.currentUser) {
      return (
        <div style={styles.btnContainer}>
          <Button
            variant="raised"
            size="small"
            onClick={() => this.setState({open: true})}
          >
            {'Contact Us'}
          </Button>
        </div>
      );
    }
    return (
      <div style={styles.btnContainer}>
        <Button
          variant="raised"
          size="small"
          onClick={() => this._addParagraph()}
        >
          {'Add New Service'}
        </Button>
      </div>
    );
  }

  render() {
    const tabs = ['overviewServices', 'stateServices', 'countyServices'];
    return (
      <Paper
        className="col-lg-10 col-md-10 col-xs-10"
        style={styles.mainContainer}
      >
        <Paper style={{minHeight: '550px'}}>
          <AppBar position="static" color="primary">
            <Tabs
              value={this.state.tab}
              onChange={(e, v) => this._tabChange(v)}
              indicatorColor={yellow[700]}
              fullWidth
            >
              <Tab label="Overview" />
              <Tab label="State" />
              <Tab label="County" />
            </Tabs>
          </AppBar>
          <ServiceTab
            serviceInfo={this._getTabInfo(this.state.tab)}
            currentUser={this.props.currentUser}
            tab={tabs[this.state.tab]}
            editService={(data, type) => this.props.editService(data, type)}
          />
          {this._renderBtn()}
        </Paper>
        <ContactForm
          open={this.state.open}
          handleClose={() => this._handleClose()}
        />
      </Paper>
    );
  }
}

Layout.propTypes = {
  addService: PropTypes.func,
  editService: PropTypes.func,
  deleteService: PropTypes.func,
  overviewServices: PropTypes.object,
  stateServices: PropTypes.array,
  countyServices: PropTypes.array,
  currentUser: PropTypes.object,
};

const styles = {
  mainContainer: {
    height: '600px',
    paddingTop: '20px',
    overflow: 'scroll',
    paddingBottom: '20px',
  },

  btnContainer: {
    display: 'flex',
    justifyContent: 'space-around',
  },
};
