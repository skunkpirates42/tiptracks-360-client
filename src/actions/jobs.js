import { API_BASE_URL } from '../config';
import { SubmissionError } from 'redux-form';
import { normalizeResponseErrors, getAuthToken } from './utils';

export const FETCH_JOBS_DATA_REQUEST = 'FETCH_JOBS_DATA_REQUEST';
export const fetchTipsDataRequest = () => ({
  type: FETCH_JOBS_DATA_REQUEST
});
 
export const FETCH_JOBS_DATA_SUCCESS = 'FETCH_JOBS_DATA_SUCCESS';
export const fetchJobsDataSuccess = (jobs) => ({
  type: FETCH_JOBS_DATA_SUCCESS,
  jobs
});

export const FETCH_JOBS_DATA_ERROR = 'FETCH_JOBS_DATA_ERROR';
export const fetchJobsDataError = (error) => ({
  type: FETCH_JOBS_DATA_ERROR,
  error
});

export const CLEAR_JOBS = 'CLEAR_JOBS';
export const clearJobs = () => ({
  type: CLEAR_JOBS
}
)
export const saveJob = newJob => (dispatch, getState) => {
  const authToken = getAuthToken(getState);
  return (
    fetch(`${API_BASE_URL}/jobs/`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${authToken}`,
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newJob)
    })
      .then(res => normalizeResponseErrors(res))   
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

export const fetchJobs = () => (dispatch, getState) => {
  dispatch(fetchTipsDataRequest());
  const authToken = getAuthToken(getState);
  return fetch(`${API_BASE_URL}/jobs`, {
    method: 'GET',
    headers: {
      // Provide our auth token as creds
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => res.json())
    .then((jobs) => dispatch(fetchJobsDataSuccess(jobs)))
    .catch(err => dispatch(fetchJobsDataError(err)));
}