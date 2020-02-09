import React from 'react';

const ProgressBar = ({ id, percentage, max, action }) => {
  return (
    <div id={id} className="player-progress" onClick={() => action()}>
      <progress id="file" value={percentage || 0} max={max}>
        <span>{percentage}</span>
      </progress>
    </div>
  );
};

export default ProgressBar;
