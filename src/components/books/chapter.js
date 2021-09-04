import React from 'react';
import '../../styles/chapter.css';

function Chapter() {
  return (
    <div className="col-2 col-sm-4 themed-grid-col ps-3">
      <p className="chapter">CURRENT CHAPTER</p>
      <p className="">Chapter 17</p>
      <button type="button" className="btn btn-primary">Update Progress</button>
    </div>
  );
}

export default Chapter;
