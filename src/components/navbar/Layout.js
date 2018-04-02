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
          <ListItem button>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Services" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Contracts" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Portfolio" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Contact Us" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
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
