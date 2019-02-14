import { 
  FETCH_JOBS_DATA_SUCCESS, FETCH_JOBS_DATA_ERROR, 
  FETCH_JOBS_DATA_REQUEST, CLEAR_JOBS
} from  '../actions/jobs'

const initialState = {
  jobs: [],
  loading: null,
  error: null
}

export const jobsReducer = (state = initialState, action) => {
  if (action.type === FETCH_JOBS_DATA_REQUEST) {
    return {
      ...state,
      loading: true
    }
  } else if (action.type === FETCH_JOBS_DATA_SUCCESS) {
    
    return {
      ...state,
      loading: false,
      jobs: action.jobs
    } 
  } else if (action.type === FETCH_JOBS_DATA_ERROR) {
      return {
        ...state,
        loading: false,
        errror: action.error
      }
  } else if (action.type === CLEAR_JOBS) {
    return {
      ...state,
      jobs: []
    }
  }
  return state;
}