import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/containers/App';
import {BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { authSucess } from './actions/auth';
const authToken = localStorage.getItem('authToken');

if (authToken) {
  store.dispatch(authSucess(authToken))
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
