import React from 'react';
import PropTypes from 'prop-types';
import Drawer from 'material-ui/Drawer';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';

export default class Layout extends React.Component {
  render() {
    return (
      <Drawer variant="permanent" anchor="left">
        <div />
        <Divider />
        <List>{'hello'}</List>
        <List>{'hello'}</List>
        <List>{'hello'}</List>
        <Divider />
        <List>{'hello'}</List>
        <List>{'hello'}</List>
        <List>{'hello'}</List>
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
