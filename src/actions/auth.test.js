import { 
  SET_AUTH_TOKEN, setAuthToken,
  CLEAR_AUTH, clearAuth,
  AUTH_REQUEST, authRequest,
  AUTH_SUCCESS, authSucess,
  AUTH_ERROR, authError 
} from './auth';

import jwtDecode from 'jwt-decode';

describe('setAuthToken', () => {
  it('should return the action', () => {
    const authToken = 'authorized';
    const action = setAuthToken(authToken);

    expect(action.type).toEqual(SET_AUTH_TOKEN);
    expect(action.authToken).toEqual(authToken);
  });
});

describe('clearAuth', () => {
  it('should return the action', () => {
    const action = clearAuth();

    expect(action.type).toEqual(CLEAR_AUTH);
  });
});

describe('authRequest', () => {
  it('should return the action', () => {
    const action = authRequest();

    expect(action.type).toEqual(AUTH_REQUEST);
  });
});

describe('authSucess', () => {
  it('should return the action', () => {
    const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImZ1bGxOYW1lIjoiQm9iIFVzZXIiLCJ0aXBzIjpbIjIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMSIsIjIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMiIsIjIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNSIsIjIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNyIsIjIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwOSIsIjIwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMSJdLCJqb2JzIjpbIjMwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCJdLCJ1c2VybmFtZSI6ImJvYnVzZXIiLCJjcmVhdGVkQXQiOiIyMDE5LTAyLTEyVDIxOjQyOjU3Ljg3NVoiLCJ1cGRhdGVkQXQiOiIyMDE5LTAyLTEyVDIxOjQyOjU3Ljg3NVoiLCJpZCI6IjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMSJ9LCJpYXQiOjE1NTAxNzU3OTAsImV4cCI6MTU1MDc4MDU5MCwic3ViIjoiYm9idXNlciJ9.SejBmyCOprjvOTPfUgRxLsy6i-HuVLoNnxoK2V47shI';
    const currentUser = jwtDecode(authToken).user
    const action = authSucess(authToken);

    expect(action.type).toEqual(AUTH_SUCCESS);
    expect(action.authToken).toEqual(authToken);
    expect(action.currentUser).toEqual(currentUser);
  });
});

describe('authError', () => {
  it('should return the action', () => {
    const error = 'Unauthorized';
    const action = authError(error);

    expect(action.type).toEqual(AUTH_ERROR);
    expect(action.error).toEqual(error);
  });
});