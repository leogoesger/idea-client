import React from 'react';
import PropTypes from 'prop-types';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';

export default class Layout extends React.Component {
  render() {
    return (
      <Drawer variant="permanent" anchor="left">
        <Divider />
        <List>
          <ListItem>
            <ListItemText primary="About Us" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Services" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Contracts" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Portfolio" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Contact Us" />
          </ListItem>
        </List>
        <Divider />
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
