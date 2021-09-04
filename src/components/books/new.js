import React from 'react';
import { useDispatch } from 'react-redux';
import { addBookAction } from '../../redux/books/books';
import '../../styles/form.css';

const New = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const category = e.target.category.value;
    e.target.title.value = '';
    e.target.category.value = '';
    dispatch(addBookAction(title, category));
  };

  return (
    <form onSubmit={handleSubmit} className="panel-bg">
      <div>
        <span className="Title Text-Style-10">
          ADD NEW BOOK
        </span>
      </div>
      <input className="Lesson-Panel" type="text" name="title" placeholder="Title" required />
      <select className="Lesson-Panel-2" type="text" name="category" placeholder="Category" required>
        <option selected disabled value=""> Choose a Category </option>
        <option value="Fiction">Sci-Fi</option>
        <option value="Action">Fiction</option>
        <option value="Terror">Detective</option>
      </select>
      <button type="submit" className="Rectangle-2 ADD-BOOK">
        ADD BOOK
      </button>
    </form>
  );
};

export default New;
