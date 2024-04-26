
import React from 'react';
import PropTypes from 'prop-types';
import './index.css'; 

const Deletetodo = ({ onDelete }) => {
  return (
    <button onClick={onDelete} className="delete-button">Delete</button> 
  );
};

Deletetodo.propTypes = {
  onDelete: PropTypes.func.isRequired,
};

export default Deletetodo;
