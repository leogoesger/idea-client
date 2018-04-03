import React from 'react';
import PropTypes from 'prop-types';
import List, {ListItem, ListItemText} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import {navigateTo} from '../../utils/helpers';
import Paper from 'material-ui/Paper';

export default class Layout extends React.Component {
  render() {
    return (
      <Paper style={styles.sideBar} className="col-lg-2 col-md-2 col-xs-2">
        <div style={{width: '100%'}}>
          <List>
            <ListItem button onClick={() => navigateTo('/')}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button onClick={() => navigateTo('/service')}>
              <ListItemText primary="Services" />
            </ListItem>
            <ListItem button onClick={() => navigateTo('/contract')}>
              <ListItemText primary="Contracts" />
            </ListItem>
            <ListItem button onClick={() => navigateTo('/portfolio')}>
              <ListItemText primary="Portfolio" />
            </ListItem>
            <ListItem button onClick={() => navigateTo('/team')}>
              <ListItemText primary="Team" />
            </ListItem>
            <ListItem button onClick={() => navigateTo('/contact')}>
              <ListItemText primary="Contact Us" />
            </ListItem>
          </List>
        </div>
        <div>
          <Divider />
          <List>
            <ListItem button onClick={() => navigateTo('/login')}>
              <ListItemText primary="Login" />
            </ListItem>
          </List>
        </div>
      </Paper>
    );
  }
}

Layout.propTypes = {};

const styles = {
  sideBar: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '600px',
    padding: '0px',
  },
};
