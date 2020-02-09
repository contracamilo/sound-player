import React from 'react';

const Time = ({ mins, secs }) => {
  return (
    <div className="player-time player-time--loading">
      <span>{`${mins || '00'}:${secs || '00'}`}</span>
    </div>
  );
};

export default Time;
