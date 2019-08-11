import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Main from './Main';
import { Login, NotFound } from '../components';

function RootRoute() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route
          path="/"
          render={props =>
            Math.random() < 0.3 ? (
              <Redirect
                to={{
                  pathname: '/login',
                  state: { from: props.location },
                }}
              />
            ) : (
              <Main />
            )
          }
        />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default RootRoute;
