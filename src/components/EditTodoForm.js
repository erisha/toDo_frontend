import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);
    
    const handleSubmit = e => {
        e.preventDefault();
        //edit todo 
        editTodo(value, task.id)
        setValue('')
    
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' 
        className='todo-input' 
        placeholder='Update Task'
        value={value}
        onChange={(e) => setValue(e.target.value)}//saves input to state
        />
        
        <button type='submit' className='todo-btn'>Update Task</button>
        </form>
  )
}
