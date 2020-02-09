import { PLAY, ERROR, PAUSE, SET_REF, SET_CURRENT_SONG } from '../../types/ActionTypes';

export const playSong = (currentTime, duration, percentage) => dispatch => {
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
  try {
    dispatch({ type: PAUSE });
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

export const setRef = (element, dispatch) => {
  try {
    element.pause();
    dispatch({ type: SET_REF, payload: element });
  } catch (error) {
    dispatch({ type: ERROR, payload: error });
  }
};
