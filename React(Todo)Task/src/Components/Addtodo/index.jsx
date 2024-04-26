
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import Swal from 'sweetalert2';
import './Add.css';
import ToDoitem from '../../Data/Todoitem';



const Addtodo = ({ todos, setTodos }) => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const handleAddTodo = () => {
    if (input.trim() === '') {
      setError('Todo input cannot be empty!.')
      return;
    };
    const newTodo = new ToDoitem(nanoid(), new Date(), input, false);
    setTodos([...todos , newTodo]);
    setInput('');
    setError('');
    Swal.fire('Added!', 'ToDo has been added.', 'success');
  };

  return (
    <div className="add-todo-container"> 
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="todo-input" 
      />
      {error && <span className="error-message">{error}</span>} 
      <button onClick={handleAddTodo} className="add-button">Add</button> 
    </div>
  );
};

export default Addtodo;
