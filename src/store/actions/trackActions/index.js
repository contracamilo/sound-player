import { FORWARD, BACKWARD, ERROR } from '../../types/ActionTypes';

export const forwardSong = (value, limit) => dispatch => {
  try {
    if (value >= limit) {
      dispatch({
        type: FORWARD,
        payload: 0,
      });
    } else {
      dispatch({
        type: FORWARD,
        payload: value + 1,
      });
    }
  } catch (error) {
    dispatch({ type: ERROR, payload: error });
  }
};

export const backwardSong = (value, limit) => dispatch => {
  try {
    if (value <= limit) {
      dispatch({
        type: BACKWARD,
        payload: 0,
      });
    } else {
      dispatch({
        type: BACKWARD,
        payload: value - 1,
      });
    }
  } catch (error) {
    dispatch({ type: ERROR, payload: error });
  }
};
