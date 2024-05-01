import React, { useState, useEffect } from 'react';
import Header from './components/Header/header';
import Main from './components/Main/main';
import PropTypes from 'prop-types';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/books')
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  return (
    <div className="App">
      <Header />
      <Main books={books}  />
    </div>
  );
}

App.propTypes = {
  book: PropTypes.object,
  index: PropTypes.number,
};

export default App;
