import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Task from '../Task/Task';
import { getTasksThunk } from '../../redux/actions/TaskAction';
import TaskForm from '../TaskForm/TaskForm';
import OptionForm from '../OptionForm/OptionForm';

function TaskList() {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getTasksThunk());
  }, []);

  return (
    <div className="taskList">
      <div>
        <h1>To-Do List</h1>
        <TaskForm />
        <hr />
      </div>
      <OptionForm />
      {tasks.map((task) => (
        <Task
          task={task}
          id={task.id}
          key={task.id}
        />
      ))}
    </div>
  );
}

export default TaskList;
