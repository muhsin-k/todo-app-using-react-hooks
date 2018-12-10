import React, { useState } from 'react';
import './App.css';

import TodoItem from './components/todoitem/TodoItem';

import Header from './components/header/Header';

function TodoForm({ addTodo }) {
  const [value, setToDo] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setToDo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        placeholder="Add a todo item"
        value={value}
        onChange={e => setToDo(e.target.value)}
      />
    </form>
  );
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Buy iPhone charger',
      isComplete: false,
    },
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isComplete = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="container ">
      <div className="app">
        <Header />
        <div className="todo-list">
          {todos.map((todo, index) => (
            <TodoItem
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          ))}
          <TodoForm addTodo={addTodo} />
        </div>
      </div>
      <div className="footer">
        Built by{' '}
        <a target="_blank" href="http://muhzi.com">
          Muhsin.K
        </a>
        © 2018
      </div>
    </div>
  );
}

export default App;
