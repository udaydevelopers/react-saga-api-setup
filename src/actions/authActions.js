import { LOGIN_REQUEST } from './types';

export const loginRequest = (username, password) => ({
  type: LOGIN_REQUEST,
  payload: { username, password },
});