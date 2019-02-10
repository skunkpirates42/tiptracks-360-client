import { 
  FETCH_TIPS_DATA_SUCCESS, FETCH_TIPS_DATA_ERROR, 
  FETCH_TIPS_DATA_REQUEST, DELETE_TIP_SUCCESS 
} from  '../actions/tips'

const initialState = {
  tips: [],
  error: null,
  loading: false,
  daily: {},
  weekly: {}
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
  } else if (action.type === DELETE_TIP_SUCCESS) {
    const newTips = state.tips.filter(tip => tip.id !== action.id)
    return {
      ...state,
      tips: newTips,
      loading: false,
      
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