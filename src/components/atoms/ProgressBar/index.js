import React from 'react';

const ProgressBar = ({ id, percentage, max, action }) => {
  const rf = document.getElementById(id);
  return (
    <div id={id} className="player-progress" onClick={() => action(rf)}>
      <progress id="file" value={percentage || 0} max={max}>
        <span>{percentage}</span>
      </progress>
    </div>
  );
};

export default ProgressBar;
