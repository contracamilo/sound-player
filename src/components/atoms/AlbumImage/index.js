import React from 'react';

const AlbumImage = ({ src, alttext, playing }) => {
  return (
    <div className={`player-cover player-cover--${playing ? 'playing' : ''}`}>
      <div className="player-cover__cd">
        <img src={src} alt={alttext} />
      </div>
    </div>
  );
};

export default AlbumImage;
