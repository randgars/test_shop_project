import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reduxLogger from 'redux-logger';
import reducers from '../reducers';

function reduxStore(initialState) {
  const store = createStore(reducers, initialState, compose(
    applyMiddleware(thunk),
    applyMiddleware(reduxLogger)
  ));

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');  // eslint-disable-line global-require

      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

export default reduxStore;
