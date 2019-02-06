import { FETCH_TIPS_DATA_SUCCESS, FETCH_TIPS_DATA_ERROR} from  '../actions/add-tips'

const initialState = {
  tips: [],
  error: null
};

export const tipsDataReducer = (state = initialState, action) => {
  if (action.type === FETCH_TIPS_DATA_SUCCESS) {
    return {
      ...state,
      tips: action.tips
    }
  } else if (action.type === FETCH_TIPS_DATA_ERROR) {
    return {
      ...state,
      error: action.error
    }
  }
  return state;
}