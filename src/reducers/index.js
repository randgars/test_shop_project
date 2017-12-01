import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import shops from './shops';

const reducers = {
  shops,
  form: formReducer
};
const combined = combineReducers(reducers);
module.exports = combined;
