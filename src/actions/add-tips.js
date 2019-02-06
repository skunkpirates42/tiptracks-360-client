import { API_BASE_URL } from '../config';
import { SubmissionError } from 'redux-form';
 
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
  const authToken = getState().auth.authToken;
  return (
    fetch(`${API_BASE_URL}/dailyreports`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${authToken}`,
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newReport)
    })
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
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/dailyreports`, {
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