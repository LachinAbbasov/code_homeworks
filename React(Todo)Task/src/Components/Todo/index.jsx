import React, { useState } from 'react';
import Addtodo from '../Addtodo/index/';
import Todolist from '../Todolist/index';
import SearchTodo from '../Searchtodo/index';


const Todo = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <Addtodo todos={todos} setTodos={setTodos} />
      <SearchTodo />
      <Todolist todos={todos} setTodos={setTodos}>
        {/* TodoItems */}
      </Todolist>
    </div>
  );
};

export default Todo;