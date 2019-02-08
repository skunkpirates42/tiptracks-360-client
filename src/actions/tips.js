import { API_BASE_URL } from '../config';
import { SubmissionError } from 'redux-form';
import { normalizeResponseErrors, getAuthToken } from './utils';

export const FETCH_TIPS_DATA_REQUEST = 'FETCH_TIPS_DATA_REQUEST';
export const fetchTipsDataRequest = () => ({
  type: FETCH_TIPS_DATA_REQUEST
});
 
export const FETCH_TIPS_DATA_SUCCESS = 'FETCH_TIPS_DATA_SUCCESS';
export const fetchTipsDataSuccess = (tips) => ({
  type: FETCH_TIPS_DATA_SUCCESS,
  tips
});

export const FETCH_TIPS_DATA_ERROR = 'FETCH_TIPS_DATA_ERROR';
export const fetchTipsDataError = (error) => ({
  type: FETCH_TIPS_DATA_ERROR,
  error
});


export const saveTips = newReport => (dispatch, getState) => {
  const authToken = getAuthToken(getState);
  return (
    fetch(`${API_BASE_URL}/tips/`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${authToken}`,
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newReport)
    })
      .then(res => normalizeResponseErrors(res))
      .then(res => res.json())
      .catch(err => {
        console.error(err.message);
        return Promise.reject(
          new SubmissionError({
            _error: err.message
          })
        );
      })
  );
} 

export const fetchTipsData = () => (dispatch, getState) => {
  dispatch(fetchTipsDataRequest());
  const authToken = getAuthToken(getState);
  return fetch(`${API_BASE_URL}/tips/`, {
    method: 'GET',
    headers: {
      // Provide our auth token as creds
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => res.json())
    .then((tips) => dispatch(fetchTipsDataSuccess(tips)))
    .catch(err => dispatch(fetchTipsDataError(err)));
}