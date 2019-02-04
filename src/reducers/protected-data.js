import { FETCH_PROTECTED_DATA_SUCCESS, FETCH_PROTECTED_DATA_ERROR} from  '../actions/protected-data'

const initialState = {
  data: '',
  error: null
};

export const protectedDataReducer = (state = initialState, action) => {
  if (action.type === FETCH_PROTECTED_DATA_SUCCESS) {
    return {
      ...state,
      data: action.data
    }
  } else if (action.type === FETCH_PROTECTED_DATA_ERROR) {
    return {
      ...state,
      error: action.error
    }
  }
  return state;
}