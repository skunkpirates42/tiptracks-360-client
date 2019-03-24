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

export const UPDATE_TIP_SUCCESS = 'UPDATE_TIP_SUCCESS';
export const updateTipSuccess = (updateTip) => ({
  type: UPDATE_TIP_SUCCESS,
  updateTip
});

export const DELETE_TIP_SUCCESS = 'DELETE_TIP_SUCCESS';
export const deleteTipSuccess = (id) => ({
  type: DELETE_TIP_SUCCESS,
  id
});

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

export const getTipById = (id) => (dispatch, getState) => {
  dispatch(fetchTipsDataRequest());
  const authToken = getAuthToken(getState);
  return fetch(`${API_BASE_URL}/tips/${id}`, {
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

export const updateTip = id => (dispatch, getState) => {
  dispatch(fetchTipsDataRequest())
  const authToken = getAuthToken(getState);
  return fetch(`${API_BASE_URL}/tips/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    }
  })
  .then(res => normalizeResponseErrors(res))
  .then(updateTip => dispatch(updateTipSuccess(updateTip)))
  .catch(err => dispatch(fetchTipsDataError(err)))
}

export const deleteTip = id => (dispatch, getState) => {
  dispatch(fetchTipsDataRequest());
  const authToken = getAuthToken(getState);
  return fetch(`${API_BASE_URL}/tips/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(() => dispatch(deleteTipSuccess(id)))
    .catch(err => dispatch(fetchTipsDataError(err)))
}
