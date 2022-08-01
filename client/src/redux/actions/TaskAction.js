import {
  GET_TASKS, DELETE_TASK, UPDATE_TASK, CREATE_TASK, CHANGE_STATUS_TASK,
} from '../constants/constants';

export const getTasks = (data) => ({ type: GET_TASKS, payload: data });
export const deleteTask = (id) => ({ type: DELETE_TASK, payload: id });
export const createTask = (data) => ({ type: CREATE_TASK, payload: data });
export const updateTask = (data) => ({ type: UPDATE_TASK, payload: data });
export const changeStatusTask = (data) => ({ type: CHANGE_STATUS_TASK, payload: data });

export const getTasksThunk = () => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_SERVER_PATH}/task`, { credentials: 'include' });
  const result = await response.json();
  dispatch(getTasks(result));
};

export const deleteTaskThunk = (id) => async (dispatch) => {
  const response = await fetch(
    `${process.env.REACT_APP_SERVER_PATH}/task/${id}`,
    { method: 'delete' },
    { credentials: 'include' },
  );
  if (response.status === 200) {
    dispatch(deleteTask(id));
  }
};

export const createTaskThunk = (data) => async (dispatch) => {
  const response = await fetch(
    `${process.env.REACT_APP_SERVER_PATH}/task`,
    {
      credentials: 'include',
      method: 'post',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    },
  );
  if (response.ok) {
    const result = await response.json();
    dispatch(createTask(result));
  }
};

export const updateTaskThunk = (data, id) => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_SERVER_PATH}/task/update/${id}`, {
    credentials: 'include',
    method: 'put',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    const result = await response.json();
    dispatch(updateTask(result));
  }
};

export const changeStatusTaskThunk = (id) => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_SERVER_PATH}/task/updatestatus/${id}`, {
    credentials: 'include',
    method: 'put',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ status: '✅ done' }),
  });
  if (response.ok) {
    const result = await response.json();
    dispatch(changeStatusTask(result));
  }
};
