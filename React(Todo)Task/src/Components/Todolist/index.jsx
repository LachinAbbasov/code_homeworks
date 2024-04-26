import React from 'react';
import PropTypes from 'prop-types';


const Todolist = ({ children }) => {
  return <>{children}</>;
};

Todolist.propTypes = {
  children: PropTypes.node,
};

export default Todolist;
