import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { updateTaskThunk, deleteTaskThunk } from '../../redux/actions/TaskAction';
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

        {user?.id === 1 ? <input className="checkBox mt-1 mb-2" type="checkbox" onClick={() => setStyle(!style)} /> : ''}
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
