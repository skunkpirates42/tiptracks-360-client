import { 
  FETCH_JOBS_DATA_REQUEST, fetchTipsDataRequest,
  FETCH_JOBS_DATA_SUCCESS, fetchJobsDataSuccess,
  FETCH_JOBS_DATA_ERROR, fetchJobsDataError,
  CLEAR_JOBS, clearJobs,
} from './jobs';


describe('fetchTipsDataRequest', () => {
  it('should return the action', () => {
    const action = fetchTipsDataRequest();

    expect(action.type).toEqual(FETCH_JOBS_DATA_REQUEST);
  });
});

describe('fetchJobsDataSuccess', () => {
  it('should return the action', () => {
    const jobs = [{job: 'main street grill'}];
    const action =fetchJobsDataSuccess(jobs);

    expect(action.type).toEqual(FETCH_JOBS_DATA_SUCCESS);
    expect(action.jobs).toEqual(jobs);
  });
});

describe('fetchJobsDataError', () => {
  it('should return the action', () => {
    const error = 'Something went wrong';
    const action = fetchJobsDataError(error);

    expect(action.type).toEqual(FETCH_JOBS_DATA_ERROR);
    expect(action.error).toEqual(error);
  });
});

describe('clearJobs', () => {
  it('should return the action', () => {
    const action = clearJobs();

    expect(action.type).toEqual(CLEAR_JOBS);
  });
});

