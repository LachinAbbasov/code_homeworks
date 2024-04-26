import React, { useState } from 'react';
import Addtodo from '../Addtodo/index/';
import Todolist from '../Todolist/index';
import SearchTodo from '../Searchtodo/index';
import Todoitem from '../Todoitem/index';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredTodos = todos.filter(todo =>
    todo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Addtodo todos={todos} setTodos={setTodos} />
      <SearchTodo onSearch={handleSearch} />
      <Todolist todos={searchTerm ? filteredTodos : todos} setTodos={setTodos} />
    </div>
  );
};

export default Todo;
