import React from 'react';
import '../../Scss/bookcard.modulle.scss'
import { FaStar } from 'react-icons/fa'; 

function BookCard({book}) {
  return (
    <div className="book-card col" style={{ width: '13%', marginBottom: '20px' }}>
      <div className="card">
        <img src={book.image} alt={book.title} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{book.title}</h5>
          <p className="card-text"> {book.director}</p>
          <div className="book-rating">
            {Array.from({ length: book.review }).map((_, index) => (
              <FaStar key={index} className="star-icon" />
            ))}
          </div>
          <p className="card-text">Price: ${book.price}</p>
        </div>
      </div>
    </div>
  );
}

export default BookCard;


