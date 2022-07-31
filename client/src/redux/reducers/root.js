import { combineReducers } from 'redux';
import authReducer from './authReducer';
import taskReducer from './taskReducer';

const rootReducer = combineReducers({
  user: authReducer,
  tasks: taskReducer,
});

export default rootReducer;
