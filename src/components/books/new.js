import React from 'react';
import { useDispatch } from 'react-redux';
import { addBookAction } from '../../redux/books/books';

const New = (e) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const author = e.target.author.value;
    e.target.title.value = '';
    e.target.author.value = '';
    dispatch(addBookAction(title, author));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Title" />
      <input type="text" name="author" placeholder="Author" />
      <button type="submit">Add</button>
    </form>
  );
};

export default New;
