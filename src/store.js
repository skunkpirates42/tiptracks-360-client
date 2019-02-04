import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { authReducer } from './reducers/auth';
import { protectedDataReducer } from './reducers/protected-data'

export default createStore(
  combineReducers({
    form: formReducer,
    auth: authReducer,
    protectedData: protectedDataReducer
  })
);