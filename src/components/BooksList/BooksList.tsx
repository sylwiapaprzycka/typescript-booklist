import React from 'react';
import { Book } from './../../interfaces/Book.interface';
import BookItem from '../BookItem/BookItem';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from './../../redux/mainTypes';
import { removeBook as removeBookAction, getAllBooks } from './../../redux/booksRedux';

import './BooksList.css';


const BooksList: React.FC = () => {
  const books = useSelector((state: StoreState) => getAllBooks(state));
  const dispatch = useDispatch();
  const removeBook = (id: string) => dispatch(removeBookAction(id));
  return (
    <ul className="books-list">
      {books.map((book: Book, index) => <BookItem key={book.id} book={book} removeBook={removeBook} />)}
    </ul>
  );
}

export default BooksList;