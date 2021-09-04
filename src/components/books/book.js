import React from 'react';
import PropTypes from 'prop-types';
import Details from './details';
import Progress from './progress';
import Chapter from './chapter';
import '../../styles/book.css';

const Book = ({ id, title, category }) => (
  <li id={id} className="Li-Lesson-Panel row mb-3">
    <Details id={id} title={title} category={category} />
    <Progress />
    <Chapter />
  </li>
);

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
