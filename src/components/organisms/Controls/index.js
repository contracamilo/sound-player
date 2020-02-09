import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '../../atoms/Button';
import { FaPlay, FaBackward, FaForward, FaPause } from 'react-icons/fa';
import { formatTime, getPercentage } from '../../../misc/index';
import { playSong, pauseSong } from '../../../store/actions/controlActions';

class Controls extends Component {
  constructor(props) {
    super(props);
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

  async onPause() {
    const { element, pauseSong } = this.props;
    await element.pause();
    setTimeout(() => {
      pauseSong();
    }, 100);
  }

  render() {
    const { playing } = this.props.controls;
    return (
      <div className="player-controls">
        <Button aria="Backward">
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
        <Button aria="Forward">
          <FaForward />
        </Button>
      </div>
    );
  }
}

const mapStateToProps = reducer => ({
  ...reducer,
});

export default connect(mapStateToProps, { playSong, pauseSong })(Controls);
