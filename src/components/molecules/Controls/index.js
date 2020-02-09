import React from 'react';
import { Button } from '../../atoms/Button';
import { FaPlay, FaBackward, FaForward, FaPause } from 'react-icons/fa';

const Controls = ({ element, info }) => {
  return (
    <div className="player-controls">
      <Button aria="Backward">
        <FaBackward />
      </Button>
      <Button aria="Play" action={() => element.play()}>
        <FaPlay />
      </Button>
      <Button aria="Pause" action={() => element.pause()}>
        <FaPause />
      </Button>
      <Button aria="Forward">
        <FaForward />
      </Button>
    </div>
  );
};

export default Controls;
