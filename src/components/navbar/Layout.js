import React from 'react';
import PropTypes from 'prop-types';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import {navigateTo} from '../../utils/helpers'
import Paper from 'material-ui/Paper'

export default class Layout extends React.Component {
  render() {
    return (
      <Paper style={styles.sideBar}>
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
      </Paper>
    );
  }
}

Layout.propTypes = {};

const styles = {
  sideBar: {
    float: 'left',
    marginLeft: '50px',
    marginRight: '50px',
    minHeight: '400px',
    marginTop: '120px',
  },
};
