import React from 'react';

const Title = ({ album, artist, song }) => {
  return (
    <div className="title">
      <h3>{album}</h3>
      <p>{`${artist} - ${song}`}</p>
    </div>
  );
};

export default Title;
