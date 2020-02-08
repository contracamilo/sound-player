import { useEffect } from 'react';
import { GET_SONGS, ERROR, LOADING } from '../../types/ActionTypes';

const url = 'http://www.mocky.io/v2/5e3f3e4a3300005e008b0b2c';

export const getArtistData = dispatch => {
  const abortController = new AbortController();

  useEffect(() => {
    dispatch({ type: LOADING });

    const fetchArtist = async () => {
      const call = await fetch(url, { signal: abortController.signal });
      const response = await call.json();
      try {
        dispatch({ type: GET_SONGS, payload: response });
      } catch (error) {
        dispatch({ type: ERROR, payload: error });
      }
    };

    fetchArtist();

    return () => {
      abortController.abort();
    };
  }, [url]);
};
