import React from 'react';
import Loader from '../../atoms/Loader';

const PlayerWidget = ({ music }) => {
  const { loading, data = [] } = music.artists;

  const artist = Object.values(data);
  const key = Object.keys(artist);

  return (
    <div className={`player-widget-main player-widget-main--${!loading && 'loaded'}`}>
      {artist.length !== 0 && artist[key].map((item, i) => <li key={i}>{item.artist}</li>)}
    </div>
  );
};

export default PlayerWidget;
