import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlayerWidget from '../../organisms/PlayerWidget/PlayerWidget';
import AudioWidget from '../../organisms/InfoWidget';
import { getArtistData } from '../../../store/actions/artistActions';

class Player extends Component {
  componentDidMount() {
    this.props.getArtistData();
  }
  render() {
    return (
      <div className="main-player">
        <div className="main-player__bg"></div>
        <div className="main-player__widget">
          <AudioWidget />
          <PlayerWidget />
        </div>
      </div>
    );
  }
}

const mapStateToProps = reducer => ({
  ...reducer,
});

export default connect(mapStateToProps, { getArtistData })(Player);
