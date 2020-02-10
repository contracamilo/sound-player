import {
  LOADING,
  PLAY,
  ERROR,
  PAUSE,
  SET_NEW_PERCENTAGE,
  SET_CURRENT_SONG,
} from '../../types/ActionTypes';

export const playSong = (currentTime, duration, percentage) => dispatch => {
  dispatch({
    type: LOADING,
  });
  try {
    dispatch({
      type: PLAY,
      payload: {
        currentTime,
        duration,
        percentage,
      },
    });
  } catch (error) {
    dispatch({ type: ERROR, payload: error });
  }
};

export const pauseSong = () => dispatch => {
  dispatch({
    type: LOADING,
  });
  try {
    dispatch({
      type: PAUSE,
      payload: {
        paused: true,
      },
    });
  } catch (error) {
    dispatch({ type: ERROR, payload: error });
  }
};

export const setCurrentSong = (song, ref) => dispatch => {
  try {
    dispatch({
      type: SET_CURRENT_SONG,
      payload: { song, ref },
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error,
    });
  }
};

export const setBarPosition = value => dispatch => {
  dispatch({
    type: LOADING,
  });
  try {
    dispatch({
      type: SET_NEW_PERCENTAGE,
      payload: value,
    });
  } catch (error) {
    dispatch({ type: ERROR, payload: error });
  }
};
