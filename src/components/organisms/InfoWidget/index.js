import React, { Component } from 'react';
import { connect } from 'react-redux';
import Title from '../../atoms/Title';
import { setCurrentSong } from '../../../store/actions/controlActions';
import ProgressBar from '../../atoms/ProgressBar';
import Time from '../../atoms/Time';

class AudioWidget extends Component {
  componentDidUpdate(prevProps) {
    const { data } = this.props.artists;
    const { artists, setCurrentSong } = this.props;
    const firtsSong = data[0];
    if (artists.data !== prevProps.artists.data) {
      setCurrentSong(firtsSong);
    }
  }

  render() {
    const { currentSong } = this.props.controls;
    return (
      <div className="player-audiowidget">
        <div className="player-audiowidget__info">
          <div className="player-audiowidget__title">
            <Title album={currentSong.album} artist={currentSong.artist} song={currentSong.name} />
          </div>
          <div className="player-audiowidget__time-stamps">
            <Time />
            <Time />
          </div>
          <div className="player-audiowidget__progress">
            <ProgressBar percentage={32} max={100} />
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
