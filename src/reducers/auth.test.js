import { authReducer } from './auth';
import { clearAuth, authRequest, authSucess, authError } from '../actions/auth';
import jwtDecode from 'jwt-decode';

describe('authReducer', () => {

  const initialState = {
    authToken: null,
    currentUser: null,
    loading: false,
    error: null
  }

  it('Should set the initial state when nothing is passed in', () => {
    const state = authReducer(undefined, {}); 

    expect(state).toEqual(initialState);
  });

  it('Should return the current state on an unknown action', () => {
    const state = authReducer(undefined, { type: 'UNKOWN' });

    expect(state).toEqual(initialState);
  });

  it('Should handle the clearAuth action', () => {
    const authorizedState = {
      ...initialState,
      authToken: 'authorized',
      currentUser: 'bobuser',
    }

    const state = authReducer(authorizedState, clearAuth());

    expect(state).toEqual(initialState);
    });

    it('Should handle the authRequest action', () => {
      const state = authReducer(initialState, authRequest());

      expect(state).toEqual({
        ...initialState,
        loading: true
      })
    });

    it('Should handle the authSuccess action', () => {
      const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImZ1bGxOYW1lIjoiQm9iIFVzZXIiLCJ0aXBzIjpbIjIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMSIsIjIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMiIsIjIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNSIsIjIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNyIsIjIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwOSIsIjIwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMSJdLCJqb2JzIjpbIjMwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCJdLCJ1c2VybmFtZSI6ImJvYnVzZXIiLCJjcmVhdGVkQXQiOiIyMDE5LTAyLTEyVDIxOjQyOjU3Ljg3NVoiLCJ1cGRhdGVkQXQiOiIyMDE5LTAyLTEyVDIxOjQyOjU3Ljg3NVoiLCJpZCI6IjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMSJ9LCJpYXQiOjE1NTAxNzU3OTAsImV4cCI6MTU1MDc4MDU5MCwic3ViIjoiYm9idXNlciJ9.SejBmyCOprjvOTPfUgRxLsy6i-HuVLoNnxoK2V47shI'
      
      const state = authReducer(initialState, authSucess(authToken))

      expect(state).toEqual({
        ...initialState,
        currentUser: jwtDecode(authToken).user,
        authToken
      })
    });

    it('Should handle the authError action', () => {
      const state = authReducer(initialState, authError('error'));

      expect(state).toEqual({
        ...initialState,
        error: 'error'
      })
    });
  });
  

