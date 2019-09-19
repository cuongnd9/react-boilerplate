import React from 'react';
import { Router } from '@reach/router';
import { Login, Repos, RepoDetail, NotFound } from 'routes';

function RouterConfig() {
  return (
    <Router>
      <Login path="/login" />
      <Repos path="/" />
      <RepoDetail path="/:name" />
      <NotFound default />
    </Router>
  );
}

export default RouterConfig;
