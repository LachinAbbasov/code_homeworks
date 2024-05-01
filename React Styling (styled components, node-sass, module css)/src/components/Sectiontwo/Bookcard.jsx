import React from 'react';
import Data from '../../assets/index.json';
import { FaStar } from 'react-icons/fa'; 

function BookCard() {
  return (
    <div className="book-card">
      {Data.map((book, index) => (
        <div key={index}>
          <img src={book.image} alt={book.title} className="book-image" />
          <div className="book-details">
            <h3 className="book-title">{book.title}</h3>
            <p className="book-director">Director: {book.director}</p>
            <div className="book-rating">
              {Array.from({ length: book.review }).map(( index) => (
                <FaStar key={index} className="star-icon" />
              ))}
            </div>
            <p className="book-price">Price: ${book.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookCard;


