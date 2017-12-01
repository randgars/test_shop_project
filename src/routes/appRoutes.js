import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router';

import Home from '../containers/Home';
import ShopPage from '../containers/Shop';

const AppRoutes = (props) => (
  <Switch key={location.key}>
    <Route exact path="/" component={Home} />
    <Route exact path="/shop/:id" component={ShopPage} />
    <Redirect from="*" to="/" />
  </Switch>
);

export default AppRoutes;
