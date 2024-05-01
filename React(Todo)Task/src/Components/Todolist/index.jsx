// import React from 'react';
// import PropTypes from 'prop-types';


// const Todolist = ({ children }) => {
//   return <>{children}</>;
// };

// Todolist.propTypes = {
//   children: PropTypes.node.isRequired
// };

// export default Todolist;

import React from 'react';
import PropTypes from 'prop-types';
import Todoitem from '../Todoitem/index'
const Todolist = ({ todos, setTodos }) => {
  return (
    <div className="todo-list-container">
      {todos.map(todo => (
        <Todoitem key={todo.id} todo={todo} setTodos={setTodos} todos={todos} />
      ))}
    </div>
  );
};

Todolist.propTypes = {
  todos: PropTypes.array.isRequired,
  setTodos: PropTypes.func.isRequired,
};

export default Todolist;