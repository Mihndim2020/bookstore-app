import React from 'react';
import '../../styles/progress.css';

function Progress() {
  return (
    <div className="ol-8 col-sm-2 themed-grid-col d-flex align-items-center">
      <div className="clearfix">
        <div className="c100 p64 small">
          <div className="slice">
            <div className="bar"> </div>
            <div className="fill"> </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center">
        <span className="percentage fs-3">64%</span>
        <p className="status">Completed</p>
      </div>
    </div>
  );
}

export default Progress;
