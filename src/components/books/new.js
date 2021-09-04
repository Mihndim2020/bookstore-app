import React from 'react';
import { useDispatch } from 'react-redux';
import { addBookAction } from '../../redux/books/books';

const New = () => {
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
      <div className="row mb-3">
        <div className="col-6 col-sm-4 themed-grid-col">
          <input type="text" name="title" placeholder="Title" required />
        </div>
        <div className="col-6 col-sm-4 themed-grid-col">
          <input type="text" name="author" placeholder="Author" required />
        </div>
        <div className="col-6 col-sm-4 themed-grid-col">
          <button type="submit" className="btn btn-primary">Add</button>
        </div>
      </div>
    </form>
  );
};

export default New;
