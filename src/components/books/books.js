import React from 'react';
import Book from './book';
import books from './mocBooks';

const Books = () => (
  <ul>
    {
        books.map((book) => {
          const { id, title, author } = book;
          return (
            <Book key={id} title={title} author={author} />
          );
        })
      }
  </ul>
);

export default Books;
