import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import App from './containers/App';
import configureStore from './stores';
import history from './sources/history';

const store = configureStore();

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextApp = require('./containers/App').default; // eslint-disable-line global-require

    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <Router history={history}>
            <NextApp />
          </Router>
        </Provider>
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
