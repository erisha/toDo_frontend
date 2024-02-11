import React, {useState} from 'react'

export const TodoForm = () => {
    const [value, setValue] = useState("")
    
    const handleSubmit = e => {
        e.preventDefault();
        console.log(value);
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' 
        className='todo-input' 
        placeholder='New Task'
        onChange={(e) => setValue(e.target.value)}//saves input to state
        />
        
        <button type='submit' className='todo-btn'>Add Task</button>
        </form>
  )
}
