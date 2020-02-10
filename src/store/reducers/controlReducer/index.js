import {
  PLAY,
  PAUSE,
  BUFFERING,
  ERROR,
  SET_NEW_PERCENTAGE,
  SET_CURRENT_SONG,
} from '../../types/ActionTypes';

export const INITIAL_STATE = {
  loading: '',
  error: '',
  playing: false,
  paused: true,
  pausedSong: true,
  currentTime: '',
  duration: '',
  percentage: '',
  currentSong: {
    ulr: '',
    cover: '',
    artist: '',
    name: '',
    album: '',
    ref: '',
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_NEW_PERCENTAGE: {
      return {
        ...state,
        loading: false,
        error: '',
        percentage: action.payload,
      };
    }
    case PLAY: {
      const { currentTime, duration, percentage } = action.payload;
      return {
        ...state,
        loading: false,
        error: '',
        playing: true,
        pausedSong: false,
        currentTime,
        duration,
        percentage,
      };
    }
    case SET_CURRENT_SONG: {
      const { artist, cover, song, album } = action.payload.song;
      return {
        ...state,
        loading: false,
        error: '',
        currentSong: {
          ulr: song.trackURL,
          cover: cover,
          artist: artist,
          name: song.name,
          album: album,
          ref: action.payload.ref,
        },
      };
    }
    case PAUSE: {
      const { paused } = action.payload;
      return {
        ...state,
        loading: false,
        error: '',
        playing: false,
        paused: paused,
        pausedSong: paused,
      };
    }
    case BUFFERING:
      return { ...state, loading: true, error: '' };

    case ERROR:
      throw { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
