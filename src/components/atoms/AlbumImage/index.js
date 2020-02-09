import React from 'react';

const AlbumImage = ({ src, alttext }) => {
  console.log('0');
  return (
    <div className="player-cover">
      <div className="player-cover__cd">
        <img src={src} alt={alttext} />
      </div>
    </div>
  );
};

export default AlbumImage;
