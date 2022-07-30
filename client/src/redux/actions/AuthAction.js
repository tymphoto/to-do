import {
  CREATE_USER, CHECK_USER, LOGOUT_USER,
} from '../constants/constants';

export const createUser = (data) => ({ type: CREATE_USER, payload: data });
export const checkUser = (data) => ({ type: CHECK_USER, payload: data });
export const userLogout = () => ({ type: LOGOUT_USER, payload: null });

export const userAuthThunk = (loginToggle, body) => async (dispatch) => {
  const response = await fetch(
    loginToggle ? `${process.env.REACT_APP_SERVER_PATH}/login` : `${process.env.REACT_APP_SERVER_PATH}/register`,
    {
      credentials: 'include',
      method: 'post',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(body),
    },

  );
  if (response.ok) {
    const result = await response.json();
    dispatch(createUser(result));
  }
};

export const userCheckAuthThunk = () => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_SERVER_PATH}/auth`, { credentials: 'include' });
  const result = await response.json();
  dispatch(checkUser(result));
};

export const userLogoutThunk = () => async (dispatch) => {
  await fetch(`${process.env.REACT_APP_SERVER_PATH}/logout`, { credentials: 'include' });
  dispatch(userLogout());
};
