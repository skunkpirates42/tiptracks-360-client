import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import reducer from './reducers/index';

export default createStore(
  combineReducers({
    form: formReducer,
    reducer
  })
);