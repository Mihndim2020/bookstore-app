import React from 'react';

const New = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.title.value = '';
    e.target.author.value = '';
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
