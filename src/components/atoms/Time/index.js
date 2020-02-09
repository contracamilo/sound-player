import React from 'react';

/**
 * Functional react component that renders time in minutes and seconds
 * @function Time
 * @returns  {JSX.Element} - Rendered component
 */

const Time = ({ time }) => {
  return (
    <div className="player-time player-time--loading">
      <span>{`${time || '00:00'}`}</span>
    </div>
  );
};

export default Time;
