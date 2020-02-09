import {
  PLAY,
  PAUSE,
  BACKWARD,
  FORWARD,
  BUFFERING,
  ERROR,
  SET_REF,
  SET_CURRENT_SONG,
} from '../../types/ActionTypes';

export const INITIAL_STATE = {
  loading: '',
  error: '',
  playing: '',
  paused: '',
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
    case SET_REF: {
      return {
        ...state,
        loading: false,
        error: '',
        ref: action.payload,
      };
    }
    case PLAY: {
      return {
        ...state,
        loading: false,
        error: '',
        playing: true,
        paused: false,
        currentSong: action.payload,
      };
    }

    case PAUSE: {
      return {
        ...state,
        loading: false,
        error: '',
        playing: false,
        paused: true,
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
    case BUFFERING:
      return { ...state, loading: true, error: '' };

    case ERROR:
      throw new Error();

    default:
      return state;
  }
};
