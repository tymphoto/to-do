import {
  CREATE_USER, CHECK_USER, LOGOUT_USER,
} from '../constants/constants';

const initialState = null;

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_USER:
      return payload;
    case CHECK_USER:
      return payload;
    case LOGOUT_USER:
      return null;
    default:
      return state;
  }
};

export default authReducer;
