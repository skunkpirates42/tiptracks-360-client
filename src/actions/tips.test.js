import { 
  FETCH_TIPS_DATA_REQUEST, fetchTipsDataRequest,
  FETCH_TIPS_DATA_SUCCESS, fetchTipsDataSuccess,
  FETCH_TIPS_DATA_ERROR, fetchTipsDataError,
  DELETE_TIP_SUCCESS, deleteTipSuccess,
} from './tips';


describe('fetchTipsDataRequest', () => {
  it('should return the action', () => {
    const action = fetchTipsDataRequest();

    expect(action.type).toEqual(FETCH_TIPS_DATA_REQUEST);
  });
});

describe('fetchTipsDataSuccess', () => {
  it('should return the action', () => {
    const tips = [{tip: '50'}];
    const action =fetchTipsDataSuccess(tips);

    expect(action.type).toEqual(FETCH_TIPS_DATA_SUCCESS);
    expect(action.tips).toEqual(tips);
  });
});

describe('fetchTipsDataError', () => {
  it('should return the action', () => {
    const error = 'Something went wrong';
    const action = fetchTipsDataError(error);

    expect(action.type).toEqual(FETCH_TIPS_DATA_ERROR);
    expect(action.error).toEqual(error);
  });
});

describe('deleteTipSuccess', () => {
  it('should return the action', () => {
    const id = 1;
    const action = deleteTipSuccess(id);

    expect(action.type).toEqual(DELETE_TIP_SUCCESS);
    expect(action.id).toEqual(id);
  });
});

