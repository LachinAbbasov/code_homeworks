import React from 'react';
import BookCard from './Bookcard';
import PropTypes from 'prop-types';
import '../../Scss/sectiontwo.modulle.scss'

function Sectiontwo({  books }) {
  return (
    <div className="section">
      <div className="section-header">
        <h2 className="section-title">Latest Published items</h2>
        <div className="category-buttons">
          <button className="category-button">All</button>
          <button className="category-button">Horror</button>
          <button className="category-button">Thriller</button>
          <button className="category-button">Science Fiction</button>
          <button className="category-button">History</button>
        </div>
      </div>
      <div className="book-cards">
        {books.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>

    </div>
  );
}

Sectiontwo.propTypes ={
  books: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
};

export default Sectiontwo;

