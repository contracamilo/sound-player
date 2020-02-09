import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from '../../atoms/Loader';
import Controls from '../Controls';
import AlbumImage from '../../atoms/AlbumImage';
import { setCurrentSong } from '../../../store/actions/controlActions';

class PlayerWidget extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  componentDidUpdate(prevProps) {
    const { data } = this.props.artists;
    const { artists, setCurrentSong } = this.props;
    const firtsSong = data[0];
    if (artists.data !== prevProps.artists.data) {
      setCurrentSong(firtsSong);
    }
  }

  render() {
    const { currentSong, playing } = this.props.controls;
    return (
      <div className={`player-widget-main player-widget-main--${'!loading' && 'loaded'}`}>
        <AlbumImage src={currentSong.cover} alt={currentSong.artist} playing={playing} />
        <Controls element={this.myRef.current} />
        <audio ref={this.myRef} src={currentSong.ulr}>
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      </div>
    );
  }
}

const mapStateToProps = reducer => ({
  ...reducer,
});

export default connect(mapStateToProps, { setCurrentSong })(PlayerWidget);
