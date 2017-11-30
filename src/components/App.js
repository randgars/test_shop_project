import React from 'react';
import './app.css';

import AppRoutes from '../routes/appRoutes';

class AppComponent extends React.Component {

  render() {
    return (
      <div>
        <AppRoutes {...this.props} />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
