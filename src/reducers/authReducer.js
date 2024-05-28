import { LOGIN_REQUEST } from '../actions/types';

const initialState = {
  token: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      // Handle login logic and update state accordingly
      return state;
    default:
      return state;
  }
};

export default authReducer;