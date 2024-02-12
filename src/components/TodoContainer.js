import React, { useState } from 'react';
import { TodoForm } from './TodoForm';
import { Todo } from "./Todo";
import { v4 as uuidv4 } from 'uuid'; // unique ids for tasks


uuidv4();

export const TodoContainer = () => {
  const [todos, setTodos] = useState([]);
  // add todo
  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completes: false, isEditing: false },
    ]);
    console.log(todos);
  };

// mark todo complete
  const toggleComplete = id => { 
    setTodos(todos.map(todo => todo.id === id ? {
      todo, completed: !todo.completed} : todo
      ))}

// delete todo
  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id ));
  }

  
  return (
    <div className="TodoContainer">
      <h1>My ToDos</h1>
      <TodoForm addTodo={addTodo} />

      {/* list task */}
      {todos.map((todo, index) => (
        <Todo 
          task={todo} 
          key={index}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          
          />
      ))}

  
    </div>
  ); 
};
