import React, { useState } from 'react';
import { TodoForm } from './TodoForm';
import { Todo } from "./Todo";
import { v4 as uuidv4 } from 'uuid'; // unique ids for tasks


uuidv4();

export const TodoContainer = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completes: false, isEditing: false },
    ]);

    console.log(todos);
  };
  return (
    <div className="TodoContainer">
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        <Todo 
          task={todo} 
          key={index}/>
      ))}

  
    </div>
  ); 
};
