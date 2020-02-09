import React, { Component } from 'react';
import { connect } from 'react-redux';
import Title from '../../atoms/Title';
import { setCurrentSong } from '../../../store/actions/controlActions';
import { getWidth } from '../../../misc';
import ProgressBar from '../../atoms/ProgressBar';
import Time from '../../atoms/Time';

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

  OnBarClick() {
    const value = getWidth(this.progressRef.current);
  }

  render() {
    const { currentSong, currentTime, percentage, duration } = this.props.controls;
    return (
      <div className="player-audiowidget">
        <div className="player-audiowidget__info">
          <div className="player-audiowidget__title">
            <Title album={currentSong.album} artist={currentSong.artist} song={currentSong.name} />
          </div>
          <div className="player-audiowidget__time-stamps">
            <Time time={currentTime} />
            <Time time={duration} />
          </div>
          <div ref={this.progressRef} className="player-audiowidget__progress">
            <ProgressBar
              element={this.progressRef.current}
              id={'progressId'}
              percentage={percentage}
              max={100}
              action={() => this.OnBarClick()}
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

export default connect(mapStateToProps, { setCurrentSong })(AudioWidget);
