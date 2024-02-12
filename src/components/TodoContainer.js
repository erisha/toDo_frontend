import React, { useState } from 'react';
import { TodoForm } from './TodoForm';
import { Todo } from './Todo';
import { v4 as uuidv4 } from 'uuid'; // unique ids for tasks
import { EditTodoForm } from './EditTodoForm';

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

  // mark todo complete (it just disappears will fix with styling)
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => todo.id === id ? {todo, completed: !todo.completed } : todo
      )
    );
  };

  // delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  //edit todo 
  const editTodo = (id) => {
    setTodos(todos.map((todo) => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo ));
  };

  const editTask = (task, id) => {
    setTodos(todos.map((todo) => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo));
  };

  return (
    <div className="TodoContainer">
      <h1>My ToDos</h1>
      <TodoForm addTodo={addTodo} />

      {/* list task */}
      {todos.map((todo, index) => 
      todo.isEditing ? ( 
        <EditTodoForm editTodo={editTask} task={todo} />) :
        
        (<Todo
          task={todo}
          key={index}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
        )
      )}
    </div>
  );
};
