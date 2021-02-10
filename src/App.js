import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Level from './pages/level';

const app = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/">
        <Level></Level>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default app;
