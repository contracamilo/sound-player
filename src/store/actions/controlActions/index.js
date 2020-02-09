import { PLAY, ERROR, PAUSE, SET_REF, SET_CURRENT_SONG } from '../../types/ActionTypes';

export const playSong = (el, dispatch, x) => {
  console.log(el);
  try {
    el.play();
    dispatch({ type: PLAY, payload: '' });
  } catch (error) {
    dispatch({ type: ERROR, payload: error });
  }
};

export const pauseSong = (element, dispatch) => {
  try {
    element.pause();
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
