import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")
    
    const handleSubmit = e => {
        e.preventDefault();
        // console.log(value);
        addTodo(value)
        setValue("") // clear task after submitting
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' 
        className='todo-input' 
        placeholder='New Task'
        value={value}
        onChange={(e) => setValue(e.target.value)}//saves input to state
        />
        
        <button type='submit' className='todo-btn'>Add Task</button>
        </form>
  )
}
