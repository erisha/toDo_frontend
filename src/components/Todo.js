import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


export const Todo = ({task}) => {
  return (
    <div className='Todo'>
      <p>{task.task}</p>
      <div>
        <EditIcon />
        <DeleteIcon />
      </div>
    </div>
  )
}
