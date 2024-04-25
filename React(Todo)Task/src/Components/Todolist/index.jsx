import React from 'react';
import PropTypes from 'prop-types';
import './index.css'; 

const Todolist = ({ children }) => {
  return <div className="todo-list-container">{children}</div>;
};

Todolist.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Todolist;
