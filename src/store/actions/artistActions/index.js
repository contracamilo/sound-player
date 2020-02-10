import { GET_SONGS, ERROR, LOADING } from '../../types/ActionTypes';

export const getArtistData = () => async dispatch => {
  const url = 'http://www.mocky.io/v2/5e40d9a62f00006d0058307c';

  dispatch({
    type: LOADING,
  });

  const call = await fetch(url, {
    method: 'GET',
    redirect: 'follow',
  });
  const response = await call.json();
  const values = Object.values(response);
  const key = Object.keys(values);
  try {
    dispatch({
      type: GET_SONGS,
      payload: values[key],
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error,
    });
  }
};
