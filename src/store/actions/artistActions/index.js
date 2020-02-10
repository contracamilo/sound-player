import { GET_SONGS, ERROR, LOADING } from '../../types/ActionTypes';

export const getArtistData = () => async dispatch => {
  const url = 'https://5e40f4692001b900146b9dd1.mockapi.io/data/demo';

  dispatch({
    type: LOADING,
  });

  const call = await fetch(url, {
    method: 'GET',
    redirect: 'follow',
    'Access-Control-Allow-Origin': '*',
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
