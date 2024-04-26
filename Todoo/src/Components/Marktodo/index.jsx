
import React from 'react';
import PropTypes from 'prop-types';
import './index.css'; 

const Marktodo = ({ onMark }) => {
  return (
    <button onClick={onMark} className="mark-button">Completed</button> 
  );
};

Marktodo.propTypes = {
  onMark: PropTypes.func.isRequired,
};

export default Marktodo;
