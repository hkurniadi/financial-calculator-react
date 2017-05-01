import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home.jsx';
import PV from './PV.jsx';
import FV from './FV.jsx';

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/pv" component={PV} />
          <Route path="/fv" component={FV} />
        </Switch>
      </main>
    );
  }
}

export default Main;