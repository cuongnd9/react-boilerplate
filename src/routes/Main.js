import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ReposContainer, RepoContainer } from 'containers';
import { Navbar } from 'components';

function Main() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={ReposContainer} />
          <Route path="/:name" component={RepoContainer} />
        </Switch>
      </div>
    </>
  );
}

export default Main;
