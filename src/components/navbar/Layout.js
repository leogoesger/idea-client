import React from 'react';
import PropTypes from 'prop-types';
import List, {ListItem, ListItemText} from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import Divider from 'material-ui/Divider';
import {navigateTo} from '../../utils/helpers';
import Paper from 'material-ui/Paper';
import red from 'material-ui/colors/red';
import {find} from 'lodash';
import Color from '../../styles/Colors'

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ChevronRight from '@material-ui/icons/ChevronRight'

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        {url: '/', name: 'Home'},
        {url: '/service', name: 'Services'},
        {url: '/contract', name: 'Contracts'},
        {url: '/portfolio', name: 'Portfolio',
          sub: this.props.portfolioSub
        },
        {url: '/team', name: 'Team'},
        {url: '/contact', name: 'Contact'},
      ],
      currentTab: 'Home',
      open: false,
    };

  }

  componentDidMount() {
    this._updateTab(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this._updateTab(nextProps);
  }

  _handleClick(tab){
    navigateTo(tab.url);
    if(tab.sub)
      this.setState({open: !this.state.open});
    else
      this.setState({open: false});
    
  }

  _updateTab(props) {
    if (props.path === '/login') {
      return this.setState({currentTab: 'Login'});
    }
    const currentTab = find(this.state.tabs, tab => tab.url === props.path)
      .name;
    this.setState({currentTab});
  }

  _getTabStyle(name) {
    if (this.state.currentTab === name) {
      return styles.activeTab;
    }
    return null;
  }

  _changeSub(value){
    this.props.editActiveSub(value);
  }

  _renderSubItems(tab) {
    return (
      <Collapse in={this.state.currentTab === tab.name && this.state.open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {tab.sub.map(tab => {
            return (
              <ListItem
                key={tab.name}
                button
                onClick={() => this._changeSub(tab.value)}
              >
                <ChevronRight 
                style={{color: tab.value === this.props.activeSub ? Color.red: Color.white}} />
                <ListItemText 
                  disableTypography 
                  style={styles.subText} 
                  primary={tab.name} 
                />
              </ListItem>
            );
          })}
        </List>
      </Collapse>
    )
  }

  _renderListItems() {
    return this.state.tabs.map(tab => {
      return (
        <div key={tab.name}>
          <ListItem
            button
            onClick={() => this._handleClick(tab)}
            style={this._getTabStyle(tab.name)}
            divider 
          >
            <ListItemText 
              disableTypography 
              style={styles.listText} 
              primary={tab.name} 
            />
          {tab.sub && (this.state.open ? <ExpandLess style={{color: Color.white}} /> 
            : <ExpandMore style={{color: Color.white}} />)}
          </ListItem>
          {tab.sub && this._renderSubItems(tab)}
          
        </div>
      );
    });
  }

  _renderLogButton() {
    if (this.props.currentUser) {
      return (
        <ListItem button onClick={() => this.props.logOutUser()}>
          <ListItemText 
            disableTypography 
            style={styles.listText}
            primary="Log Out" 
          />
        </ListItem>
      );
    }
    return (
      <ListItem
        button
        onClick={() => navigateTo('/login')}
        style={this._getTabStyle('Login')}
      >
        <ListItemText 
          disableTypography 
          primary="Login" 
          style={styles.listText}
        />
      </ListItem>
    );
  }

  render() {
    return (
      <Paper style={styles.sideBar} className="col-lg-2 col-md-2 col-xs-2">
        <div style={{width: '100%', padding: '0px'}}>
          <List style={{padding: '0px'}}>{this._renderListItems()}</List>
        </div>
        <div>
          <Divider />
          {this._renderLogButton()}
        </div>
      </Paper>
    );
  }
}

Layout.propTypes = {
  currentUser: PropTypes.object,
  path: PropTypes.string,
  logOutUser: PropTypes.func,
  portfolioSub: PropTypes.array,
  activeSub: PropTypes.string,
  editActiveSub: PropTypes.func,
};

const styles = {
  sideBar: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '600px',
    padding: '0px',
    backgroundColor: Color.green,
    overflow: 'auto',
  },
  activeTab: {
    borderLeftWidth: '5px',
    borderLeftStyle: 'solid',
    borderLeftColor: red[400],
  },
  activeSub: {
    borderLeftWidth: '2px',
    borderLeftStyle: 'solid',
    borderLeftColor: red[400],
  },
  listText: {
    color: Color.white,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: '12px',
    color: Color.white,
    fontWeight: 'bold',
  }
};
