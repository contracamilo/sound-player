import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '../../atoms/Button';
import { FaPlay, FaBackward, FaForward, FaPause } from 'react-icons/fa';
import { formatTime, getPercentage } from '../../../misc/index';
import { playSong, pauseSong } from '../../../store/actions/controlActions';
import { forwardSong, backwardSong } from '../../../store/actions/trackActions';
import { setCurrentSong } from '../../../store/actions/controlActions';

/**
 * React Class that renders control buttons and manage state and logic on the player´s controls.
 * @class Controls
 * @returns  {JSX.Element} - Rendered component
 */

class Controls extends Component {
  constructor(props) {
    super(props);

    this.onPlay = this.onPlay.bind(this);
  }

  onPlay() {
    const { element, playSong } = this.props;
    element.play();
    if (element !== null) {
      element.addEventListener('timeupdate', e => {
        const ct = e.target.currentTime;
        const drtn = e.target.duration;
        let currentTime = formatTime(ct);
        let duration = formatTime(drtn);
        let percentage = getPercentage(ct, drtn);

        playSong(currentTime, duration, percentage);
      });
    }
  }

  componentDidUpdate(prevProps) {
    const { currentTrack } = this.props.track;
    const { data } = this.props.artists;
    const { percentage } = this.props.controls;
    if (currentTrack !== prevProps.track.currentTrack) {
      this.props.setCurrentSong(data[currentTrack]);
      setTimeout(() => {
        this.onPlay();
      }, 50);
    }
    if (percentage === 100) {
      this.onPause()
    }
  }

  onPause() {
    const { element, pauseSong } = this.props;
    element.pause();
    setTimeout(() => {
      pauseSong();
    }, 50);
  }

  render() {
    const { playing } = this.props.controls;
    const { forwardSong, backwardSong } = this.props;
    const { currentTrack } = this.props.track;
    const { quantity } = this.props.artists;
    return (
      <div className="player-controls">
        <Button
          aria="Backward"
          disabled={currentTrack === 0}
          action={() => backwardSong(currentTrack, 0)}
        >
          <FaBackward />
        </Button>
        {playing ? (
          <Button aria="Pause" action={() => this.onPause()}>
            <FaPause />
          </Button>
        ) : (
          <Button aria="Play" action={() => this.onPlay()}>
            <FaPlay />
          </Button>
        )}
        <Button aria="Forward" action={() => forwardSong(currentTrack, quantity)}>
          <FaForward />
        </Button>
      </div>
    );
  }
}

const mapStateToProps = reducer => ({
  ...reducer,
});

export default connect(mapStateToProps, {
  playSong,
  pauseSong,
  forwardSong,
  backwardSong,
  setCurrentSong,
})(Controls);
