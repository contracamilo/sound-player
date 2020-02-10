import React, { Component } from 'react';
import { connect } from 'react-redux';
import Title from '../../atoms/Title';
import { setCurrentSong, setBarPosition } from '../../../store/actions/controlActions';
import { getWidth } from '../../../misc';
import ProgressBar from '../../atoms/ProgressBar';
import Time from '../../atoms/Time';

/**
 * React Class that renders the info elements and manage state and Logic for the music player.
 * @class AudioWidget
 * @returns  {JSX.Element} - Rendered component
 */

class AudioWidget extends Component {
  constructor(props) {
    super(props);
    this.progressRef = React.createRef();
  }

  componentDidUpdate(prevProps) {
    const { data } = this.props.artists;
    const { artists, setCurrentSong } = this.props;
    const firtsSong = data[0];
    if (artists.data !== prevProps.artists.data) {
      setCurrentSong(firtsSong);
    }
  }

  OnBarClick(ref) {
    getWidth(ref, value => this.props.setBarPosition(value));
  }

  render() {
    const { currentSong, currentTime, percentage, duration, playing } = this.props.controls;
    const rf = document.getElementById('progressId');
    return (
      <div className={`player-audiowidget player-audiowidget--${playing ? 'open' : ''}`}>
        <div className="player-audiowidget__info">
          <div className="player-audiowidget__title">
            <Title album={currentSong.album} artist={currentSong.artist} song={currentSong.name} />
          </div>
          <div className="player-audiowidget__time-stamps">
            <Time time={currentTime} />
            {currentTime === '00:00' ? <i>Buffering...</i> : <Time time={duration} />}
          </div>
          <div className="player-audiowidget__progress">
            <ProgressBar
              id={'progressId'}
              percentage={`${percentage}`}
              max={100}
              action={() => this.OnBarClick(rf)}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = reducer => ({
  ...reducer,
});

export default connect(mapStateToProps, { setCurrentSong, setBarPosition })(AudioWidget);
