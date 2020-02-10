import React from 'react';

/**
 * Functional react component that renders the album´s cover image
 * @function AlbumImage
 * @param src { string } source URL
 * @param alttext { string }
 * @param playing { boolean }
 * @returns  {JSX.Element} - Rendered component
 */

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
