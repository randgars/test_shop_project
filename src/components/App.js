import React from 'react';
import { Route, Link } from 'react-router-dom';

import '../styles/app.scss';

import AppRoutes from '../routes/appRoutes';

import { Toolbar } from 'react-md';

const AppComponent = (props) => {
  return (
    <Route render={({ location }) => (
      <div>
        <Toolbar
          colored
          title={<Link to={'/'}>Test project</Link>}
          />
        <AppRoutes location={location} />
      </div>
    )}/>
  );
}

export default AppComponent;