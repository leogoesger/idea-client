/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route} from 'react-router-dom';
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import red from 'material-ui/colors/red';
import teal from 'material-ui/colors/teal';

import Home from '../containers/Home';
import Contact from '../containers/Contact';
import Contract from '../containers/Contract';
import Navbar from '../containers/Navbar';
import Login from '../containers/Login';
import Portfolio from '../containers/Portfolio';
import Service from '../containers/Service';
import Team from '../containers/Team';
import Logo from './logo/Logo';

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 35,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
      },
      label: {
        padding: '0 10px',
        color: 'white',
      },
      raised: {
        backgroundColor: red[400],
        '&:hover': {
          backgroundColor: red[700],
        },
      },
    },
    MuiTypography: {
      body1: {
        marginTop: '5px',
        lineHeight: '20px',
      },
    },
    MuiTab: {
      root: {
        width: '100%',
      },
      label: {
        color: 'white',
        fontWeight: '700',
      },
    },
    MuiTabs: {
      root: {
        boxShadow: 'none',
      },
      indicator: {
        height: '3px',
      },
    },
    MuiAppBar: {
      root: {backgroundColor: 'pink', boxShadow: 'none'},
      colorPrimary: {backgroundColor: red[400]},
    },
  },
});

class App extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          width: '90%',
          margin: '140px auto',
          position: 'relative',
        }}
      >
        <MuiThemeProvider theme={theme}>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/contract" component={Contract} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/service" component={Service} />
            <Route exact path="/team" component={Team} />
          </Switch>
          <Logo />
        </MuiThemeProvider>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
};

export default App;
