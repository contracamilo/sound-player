import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from '../../atoms/Loader';
import Controls from '../Controls';
import AlbumImage from '../../atoms/AlbumImage';
import { setCurrentSong } from '../../../store/actions/controlActions';

/**
 * React Class that renders the artist info elements and manage state and Logic for the music player.
 * @class PlayerWidget
 * @returns  {JSX.Element} - Rendered component
 */
class PlayerWidget extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  setAudio(url) {
    return (
      <audio ref={this.myRef} src={url}>
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    );
  }

  render() {
    const { currentSong, currentTime, playing } = this.props.controls;
    return (
      <div className={`player-widget-main player-widget-main--${'!loading' && 'loaded'}`}>
        {currentSong.cover ? (
          <AlbumImage
            buffering={currentTime === '00:00'}
            src={currentSong.cover}
            alt={currentSong.artist}
            playing={playing}
          />
        ) : (
          <>
            <Loader />
            <span>...Loading</span>
          </>
        )}
        <Controls element={this.myRef.current} />
        {currentSong && this.setAudio(currentSong.ulr)}
      </div>
    );
  }
}

const mapStateToProps = reducer => ({
  ...reducer,
});

export default connect(mapStateToProps, { setCurrentSong })(PlayerWidget);
