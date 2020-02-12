import {
  LOADING,    
  ERROR,
  SET_REF
} from '../../types/ActionTypes';
  
export const setRef = (ref) => dispatch => {
  dispatch({
    type: LOADING,
  });
  try {
    dispatch({
      type: SET_REF,
      payload: ref,
    });
  } catch (error) {
    dispatch({ type: ERROR, payload: error });
  }
};