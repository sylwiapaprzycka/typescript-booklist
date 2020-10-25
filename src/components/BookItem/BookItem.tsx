import React from 'react';
import { Book } from '../../interfaces/Book.interface';
import './BookItem.css';

interface Props {
  book: Book;
  deleteBook: (id: string) => void
}

const BookItem: React.FC<Props> = ({ book, deleteBook }) => {

  const handleRemove = () => {
    deleteBook(book.id)
  }
  return(
      <li className="book-item">
        {book.title} by {book.author}, {book.price}$
        <button onClick={handleRemove}>x</button>
      </li>
  );
}

export default BookItem;