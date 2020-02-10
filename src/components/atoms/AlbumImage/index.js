import React from 'react';

/**
 * Functional react component that renders the album´s cover image
 * @function AlbumImage
 * @param src { string } source URL
 * @param alttext { string }
 * @param playing { boolean }
 * @returns  {JSX.Element} - Rendered component
 */

const AlbumImage = ({ src, alttext, playing, buffering }) => {
  return (
    <>
      <div className={`player-cover player-cover--${playing && !buffering ? 'playing' : ''}`}>
        <div className="player-cover__cd">
          <img src={src} alt={alttext} />
        </div>
      </div>
      {buffering && <span className="player-cover__buff-text">...Buffering</span>}
    </>
  );
};

export default AlbumImage;
