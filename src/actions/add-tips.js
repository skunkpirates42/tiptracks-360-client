import { API_BASE_URL } from '../config';
import { SubmissionError } from 'redux-form';
 
export const saveTips = newReport => dispatch => {
  return (
    fetch(`${API_BASE_URL}/dailyreports`, {
      method: 'POST',
      headers: {
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