import React from 'react';
import BookCard from './Bookcard';


function Sectiontwo({ title, books }) {
  return (
    <div className="section">
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
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

export default Sectiontwo;
