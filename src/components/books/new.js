import React from 'react';
import { useDispatch } from 'react-redux';
import { addBookAction } from '../../redux/books/books';
import '../../styles/form.css';

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
    <form onSubmit={handleSubmit} className="panel-bg">
      <div>
        <span className="Title Text-Style-10">
          ADD NEW BOOK
        </span>
      </div>
      <input type="text" name="title" placeholder="Title" className="Lesson-Panel" required />
      <input className="Lesson-Panel-2" type="text" name="author" placeholder="Author" required />
      <span className="ADD-BOOK">
        <button type="submit" className="Rectangle-2 ADD-BOOK">
          ADD BOOK
        </button>
      </span>
    </form>
  );
};

export default New;
