import { tipsDataReducer } from './tips-data';
import { fetchTipsDataRequest, fetchTipsDataSuccess, fetchTipsDataError, deleteTipSuccess } from '../actions/tips';


describe('tipsDataReducer', () => {

  const initialState = {
    tips: [],
    loading: false,
    error: null,
  }

  it('Should set the initial state when nothing is passed in', () => {
    const state = tipsDataReducer(undefined, {}); 

    expect(state).toEqual(initialState);
  });

  it('Should return the current state on an unknown action', () => {
    const state = tipsDataReducer(undefined, { type: 'UNKOWN' });

    expect(state).toEqual(initialState);
  });

  it('Should handle the fetchJobsDataRequest action', () => {
    const state = tipsDataReducer(initialState, fetchTipsDataRequest());

    expect(state).toEqual({
      ...initialState,
      loading: true
    });
    });

    it('Should handle the fetchTipsDataSuccess action', () => {
      const tips = [{tips: 5}]
      const state = tipsDataReducer(initialState, fetchTipsDataSuccess(tips));

      expect(state).toEqual({
        ...initialState,
        tips
      })
    });

    it('Should handle the fetchTipsDataError action', () => {  
      const error = 'error';    
      const state = tipsDataReducer(initialState, fetchTipsDataError(error))

      expect(state).toEqual({
        ...initialState,
        error
      })
    });

    it('Should handle the clearTips action', () => {
      const stateWithTips = {
        ...initialState,
        tips: [{tip: 5}]
      }

      const state = tipsDataReducer(stateWithTips, deleteTipSuccess());

      expect(state).toEqual(initialState)
    });
  });
  

