import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookAction } from '../../redux/books/books';
import '../../styles/details.css';

function Details({ id, title, category }) {
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeBookAction(id));
  };

  return (
    <div className="col-8 col-sm-6 themed-grid-col">
      <span className="School-of">
        {category}
      </span>
      <p>
        <span className="Title">
          {title}
        </span>
      </p>
      <button type="button" className="Buttons">Comments</button>
      <button type="button" className="Buttons" onClick={() => handleRemove(id)}>Remove</button>
      <button type="button" className="Buttons">Edit</button>
    </div>
  );
}

Details.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Details;
