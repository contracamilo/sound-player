import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlayerWidget from '../../organisms/PlayerWidget';
import AudioWidget from '../../organisms/InfoWidget';
import { getArtistData } from '../../../store/actions/artistActions';
import Loader from '../../atoms/Loader';

class Player extends Component {
  componentDidMount() {
    this.props.getArtistData();
  }
  render() {
    const { data } = this.props.artists;
    return (
      <div className="main-player">
        <div className="main-player__bg"></div>
        <div className="main-player__widget">
          <AudioWidget />
          {data.length ? <PlayerWidget /> : <Loader />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = reducer => ({
  ...reducer,
});

export default connect(mapStateToProps, { getArtistData })(Player);
