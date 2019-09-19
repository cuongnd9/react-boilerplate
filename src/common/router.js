import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Login, Repos, RepoDetail, NotFound } from 'routes';

function RouterConfig() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route exact path="/" component={Repos} />
      <Route path="/:name" component={RepoDetail} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default RouterConfig;
