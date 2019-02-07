import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import { authReducer } from './reducers/auth';
import { tipsDataReducer } from './reducers/tips-data';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(
  combineReducers({
    form: formReducer,
    auth: authReducer,
    tipsData: tipsDataReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
);