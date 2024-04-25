import React from 'react';
import PropTypes from 'prop-types';
import Deletetodo from '../Deletetodo/index/';
import Marktodo from '../Marktodo/index';
import './index.css'; 


const Todoitem = ({ todo, setTodos, todos }) => {
  const handleDeleteTodo = () => {
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  const handleMarkTodo = () => {
    setTodos(todos.map((t) => t.id === todo.id ? { ...t, isDone: !t.isDone } : t));
  };

  return (
    <div className="todo-item-container">
      <span className="todo-title">{todo.title}</span>
      <div className="todo-actions">
        <Deletetodo onDelete={handleDeleteTodo} />
        <Marktodo onMark={handleMarkTodo} />
      </div>
    </div>
  );
};

Todoitem.propTypes = {
  todo: PropTypes.object.isRequired,
  setTodos: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
};

export default Todoitem;
