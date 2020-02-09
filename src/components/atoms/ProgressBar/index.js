import React from 'react';

const ProgressBar = ({ percentage, max }) => {
  return (
    <div className="player-progress">
      <progress id="file" value={percentage} max={max}>
        <span>{percentage}</span>
      </progress>
    </div>
  );
};

export default ProgressBar;
