import { jobsReducer } from './jobs';
import { fetchJobsDataRequest, fetchJobsDataSuccess, fetchJobsDataError, clearJobs } from '../actions/jobs';


describe('jobsReducer', () => {

  const initialState = {
    jobs: [],
    loading: null,
    error: null
  }

  it('Should set the initial state when nothing is passed in', () => {
    const state = jobsReducer(undefined, {}); 

    expect(state).toEqual(initialState);
  });

  it('Should return the current state on an unknown action', () => {
    const state = jobsReducer(undefined, { type: 'UNKOWN' });

    expect(state).toEqual(initialState);
  });

  it('Should handle the fetchJobsDataRequest action', () => {
    const state = jobsReducer(initialState, fetchJobsDataRequest());

    expect(state).toEqual({
      ...initialState,
      loading: true
    });
    });

    it('Should handle the fetchJobsDataSuccess action', () => {
      const jobs = [{job: 'bar'}]
      const state = jobsReducer(initialState, fetchJobsDataSuccess(jobs));

      expect(state).toEqual({
        ...initialState,
        jobs
      })
    });

    it('Should handle the fetchJobsDataError action', () => {  
      const error = 'error';    
      const state = jobsReducer(initialState, fetchJobsDataError(error))

      expect(state).toEqual({
        ...initialState,
        error
      })
    });

    it('Should handle the clearJobs action', () => {
      const stateWithJobs = {
        ...initialState,
        jobs: [{job: 'bar'}]
      }

      const state = jobsReducer(stateWithJobs, clearJobs());

      expect(state).toEqual(initialState)
    });
  });
  

