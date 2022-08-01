import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { updateTaskThunk, deleteTaskThunk, changeStatusTaskThunk } from '../../redux/actions/TaskAction';
import MyButton from '../MyButton/MyButton';

function Task({ task, id }) {
  const { user } = useSelector((state) => state);
  const [style, setStyle] = useState(false);
  const [newText, setNewText] = useState('');
  const dispatch = useDispatch();

  const changeTask = (item) => {
    item.text = newText;
    dispatch(updateTaskThunk(item, item.id));
  };

  const handleInput = (e) => {
    setNewText(e.target.value);
  };

  return (
    <div className="task">
      <div className={style ? 'task_container text-through' : 'task_container'}>
        <p>
          Задачу создал:
          {' '}
          {task.User.name}
        </p>
        <p>
          Email:
          {' '}
          {task.User.email}
        </p>
        <p>{task.text}</p>
        <p>
          {task.status}
          {' '}
          {user?.id === 1 && task.status === 'not done'
            ? (
              <Button
                type="button"
                variant="success"
                onClick={() => { dispatch(changeStatusTaskThunk(id)); setStyle(!style); }}
              >
                Отметить выполненным

              </Button>
            ) : '' }
        </p>

        {user?.id === 1 ? <MyButton type="button" func={deleteTaskThunk(id)}>Удалить</MyButton> : ''}
        {user?.id === 1 ? (
          <div>
            <input type="text" onChange={(e) => handleInput(e)} />
            {' '}
            <Button type="button" onClick={() => { changeTask(task); }}>Изменить</Button>
          </div>
        ) : ''}
      </div>
    </div>
  );
}

export default Task;
