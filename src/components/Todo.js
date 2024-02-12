import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export const Todo = ({ task, toggleComplete, deleteTodo}) => {
  return (
    <div className="Todo">
      <p 
        className={`$task.completed ? 'completed' : "" `} onClick={() => toggleComplete(task.id)}>
        {task.task}
      </p>
      <div>
        <EditIcon />
        <DeleteIcon onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
};
