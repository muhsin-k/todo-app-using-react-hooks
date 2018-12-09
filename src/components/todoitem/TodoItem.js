import React from 'react';

import './TodoItem.css';

export default function TodoItem({ todo, index, completeTodo, removeTodo }) {
  return (
    <div className="active-todo-item">
      <div className="row">
        <div
          className="col s8 todo-active-text"
          style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
        >
          {' '}
          {todo.text}
        </div>
        <div className="col s2 todo-active-icon" onClick={() => completeTodo(index)}>
          <i className="small material-icons">done</i>
        </div>
        <div className="col s2 todo-active-icon" onClick={() => removeTodo(index)}>
          <i className="small material-icons">delete</i>
        </div>
      </div>
    </div>
  );
}
