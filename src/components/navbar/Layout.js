import React from 'react';
import PropTypes from 'prop-types';
import List, {ListItem, ListItemText} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import {navigateTo} from '../../utils/helpers';
import Paper from 'material-ui/Paper';
import red from 'material-ui/colors/red';
import {find} from 'lodash';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        {url: '/', name: 'Home'},
        {url: '/service', name: 'Services'},
        {url: '/contract', name: 'Contracts'},
        {url: '/portfolio', name: 'Portfolio'},
        {url: '/team', name: 'Team'},
        {url: '/contact', name: 'Contact'},
      ],
      currentTab: 'Home',
    };
  }

  componentDidMount() {
    this._updateTab(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this._updateTab(nextProps);
  }

  _updateTab(props) {
    if (props.path === '/login') {
      return this.setState({currentTab: 'Login'});
    }
    const currentTab = find(this.state.tabs, tab => tab.url === props.path)
      .name;
    this.setState({currentTab});
  }

  _navigateTo(location, name) {
    this.setState({currentTab: name});
    navigateTo(location);
  }

  _getTabStyle(name) {
    if (this.state.currentTab === name) {
      return styles.activeTab;
    }
    return null;
  }

  _renderListItems() {
    return this.state.tabs.map(tab => {
      return (
        <ListItem
          key={tab.name}
          button
          onClick={() => this._navigateTo(tab.url, tab.name)}
          style={this._getTabStyle(tab.name)}
        >
          <ListItemText primary={tab.name} />
        </ListItem>
      );
    });
  }

  render() {
    return (
      <Paper style={styles.sideBar} className="col-lg-2 col-md-2 col-xs-2">
        <div style={{width: '100%', padding: '0px'}}>
          <List style={{padding: '0px'}}>{this._renderListItems()}</List>
        </div>
        <div>
          <Divider />
          <List style={{padding: '0px'}}>
            <ListItem
              button
              onClick={() => this._navigateTo('/login', 'Login')}
              style={this._getTabStyle('Login')}
            >
              <ListItemText primary="Login" />
            </ListItem>
          </List>
        </div>
      </Paper>
    );
  }
}

Layout.propTypes = {path: PropTypes.string};

const styles = {
  sideBar: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '600px',
    padding: '0px',
  },
  activeTab: {
    borderLeftWidth: '5px',
    borderLeftStyle: 'solid',
    borderLeftColor: red[400],
  },
};
