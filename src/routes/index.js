import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './Main';
import { Login, NotFound } from '../components';

function RootRoute() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Main} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default RootRoute;
