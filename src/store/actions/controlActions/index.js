import { PLAY, ERROR, PAUSE, SET_NEW_PERCENTAGE, SET_CURRENT_SONG } from '../../types/ActionTypes';

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
    dispatch({ type: PAUSE, payload: true });
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
  console.log(value);
  try {
    dispatch({
      type: SET_NEW_PERCENTAGE,
      payload: value,
    });
  } catch (error) {
    dispatch({ type: ERROR, payload: error });
  }
};
