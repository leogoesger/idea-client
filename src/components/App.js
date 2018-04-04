/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route} from 'react-router-dom';

import Home from '../containers/Home';
import Contact from '../containers/Contact';
import Contract from '../containers/Contract';
import Navbar from '../containers/Navbar';
import Login from '../containers/Login';
import Portfolio from '../containers/Portfolio';
import Service from '../containers/Service';
import Team from '../containers/Team';
import Logo from './logo/Logo';

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
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
};

export default App;
