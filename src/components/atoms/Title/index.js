import React from 'react';

/**
 * Functional react component that renders the player´s song title
 * @function Time
 * @param time { string }
 * @returns  {JSX.Element} - Rendered component
 */

const Title = ({ album, artist, song }) => {
  return (
    <div className="title">
      <h3>{album}</h3>
      <p>{`${artist} - ${song}`}</p>
    </div>
  );
};

export default Title;
