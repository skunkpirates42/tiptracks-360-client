import { FETCH_TIPS_DATA_SUCCESS, FETCH_TIPS_DATA_ERROR, FETCH_TIPS_DATA_REQUEST } from  '../actions/tips'

const initialState = {
  tips: [],
  error: null,
  loading: false
};

export const tipsDataReducer = (state = initialState, action) => {
  if (action.type === FETCH_TIPS_DATA_REQUEST) {
    return {
      ...state,
      loading: true
    }
  }
  else if (action.type === FETCH_TIPS_DATA_SUCCESS) {
    return {
      ...state,
      loading: false,
      tips: action.tips
    }
  } else if (action.type === FETCH_TIPS_DATA_ERROR) {
    return {
      ...state,
      loading: false,
      error: action.error
    }
  }
  return state;
}