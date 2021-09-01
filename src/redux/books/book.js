import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ id, title, author }) => (
  <li key={id}>
    <div>
      <h4>
        { title }
      </h4>
      <p>
        { author }
      </p>
    </div>
    <button type="button">Remove</button>
  </li>
);

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
