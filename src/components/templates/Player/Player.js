import React, { useReducer } from 'react';
import PlayerWidget from '../../organisms/PlayerWidget/PlayerWidget';
import rootReducer from '../../../store/reducers';
import { getArtistData } from '../../../store/actions/artistActions';
import { INITIAL_STATE } from '../../../store/reducers/artistReducer';

const Player = () => {
  const [state, dispatch] = useReducer(rootReducer, { artists: INITIAL_STATE });
  getArtistData(dispatch);

  return (
    <div className="main-player">
      <div className="main-player__bg"></div>
      <div className="main-player__widget">
        <PlayerWidget music={state} />
      </div>
    </div>
  );
};

export default Player;
