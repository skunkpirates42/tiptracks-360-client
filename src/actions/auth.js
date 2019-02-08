import jwtDecode from 'jwt-decode';
import { SubmissionError } from 'redux-form';

import { API_BASE_URL } from '../config';
import { normalizeResponseErrors, getAuthToken } from './utils';


export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const setAuthToken = authToken => ({
  type: SET_AUTH_TOKEN,
  authToken
});

export const CLEAR_AUTH = 'CLEAR_AUTH';
export const clearAuth = () => ({
  type: CLEAR_AUTH
});

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const authRequest = () => ({
  type: AUTH_REQUEST
});

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const authSucess = currentUser => ({
  type: AUTH_SUCCESS,
  currentUser
});

export const AUTH_ERROR = 'AUTH_ERROR';
export const authError = error => ({
  type: AUTH_ERROR,
  error
});

// Stores the auth token in state and localStorage, and decodes and stores
// the user data stored in the token
const storeAuthInfo = (authToken, dispatch) => {
  const decodedToken = jwtDecode(authToken);
  dispatch(setAuthToken(authToken));
  dispatch(authSucess(decodedToken.user));
  localStorage.setItem('authToken', authToken);
}

export const login = (username, password) => dispatch => {  
  dispatch(authRequest());
  return (
    fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
        })
    })
      .then(res => normalizeResponseErrors(res))
      .then(res => res.json())
      .then(({authToken}) => storeAuthInfo(authToken, dispatch))
      .catch(err => {
        const { code } = err;
        const message = 
          code === 401
            ? 'Incorrect username or password'
            : 'Unable to login, please try again';
        dispatch(authError(err));
        // Could not authenticate so return a submissionError for redux form
        return Promise.reject(
          new SubmissionError({
            _error: message
          })
        );
      })
  );
};

export const refreshAuthToken = () => (dispatch, getState) => {
  dispatch(authRequest());
  const authToken = getAuthToken(getState);
  return (
    fetch(`${API_BASE_URL}/auth/refresh`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${authToken}`
      }
    })
      .then(res => normalizeResponseErrors(res))
      .then(res => res.json())
      .then(({ authToken }) => storeAuthInfo(authToken, dispatch))
      .catch(err => {
        // We couldn't get a refresh token because our current creds
        // are invalid or expired, or something else went wrong, so clear
        // then and sign us out
        dispatch(authError(err));
        dispatch(clearAuth());
      })
  )
}