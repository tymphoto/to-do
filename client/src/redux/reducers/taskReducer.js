import {
  GET_TASKS, DELETE_TASK, UPDATE_TASK, CREATE_TASK, CHANGE_STATUS_TASK,
} from '../constants/constants';

const initialState = [];

const taskReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_TASKS:
      return payload;
    case DELETE_TASK:
      return state.filter((task) => task.id !== payload);
    case CREATE_TASK:
      return [...state, payload];
    case UPDATE_TASK:
      return state.map((task) => (task.id === payload.id ? payload : task));
    case CHANGE_STATUS_TASK:
      return state.map((task) => (task.id === payload.id ? payload : task));
    default:
      return state;
  }
};

export default taskReducer;
