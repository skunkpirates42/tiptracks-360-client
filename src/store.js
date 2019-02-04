import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { authReducer } from './reducers/auth';

export default createStore(
  combineReducers({
    form: formReducer,
    authReducer
  })
);