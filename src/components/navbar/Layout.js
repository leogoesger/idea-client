import React from 'react';
import PropTypes from 'prop-types';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import {navigateTo} from '../../utils/helpers'

export default class Layout extends React.Component {
  render() {
    return (
      <Drawer variant="permanent" anchor="left">
        <Divider />
        <List>
          <ListItem button onClick={navigateTo.bind(this, "/", "")}>
            <ListItemText primary="Home"  />
          </ListItem>
          <ListItem button onClick={navigateTo.bind(this, "/team", "")}>
            <ListItemText primary="Team"  />
          </ListItem>
          <ListItem button onClick={navigateTo.bind(this, "/service", "")}>
            <ListItemText primary="Services" />
          </ListItem>
          <ListItem button onClick={navigateTo.bind(this, "/contract", "")}>
            <ListItemText primary="Contracts" />
          </ListItem>
          <ListItem button onClick={navigateTo.bind(this, "/portfolio", "")}>
            <ListItemText primary="Portfolio" />
          </ListItem>
          <ListItem button onClick={navigateTo.bind(this, "/contact", "")}>
            <ListItemText primary="Contact Us" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button onClick={navigateTo.bind(this, "/login", "")}>
            <ListItemText primary="Login" />
          </ListItem>
        </List>
      </Drawer>
    );
  }
}

Layout.propTypes = {};

const styles = {
  inputContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    margin: '80px auto 30px auto',
  },
};
