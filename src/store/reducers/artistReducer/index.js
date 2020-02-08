import { GET_SONGS, LOADING, ERROR } from '../../types/ActionTypes';

export const INITIAL_STATE = {
  loading: '',
  error: '',
  data: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_SONGS: {
      return {
        ...state,
        loading: false,
        error: '',
        data: action.payload,
      };
    }
    case LOADING:
      return { ...state, loading: true, error: '' };

    case ERROR:
      throw new Error();

    default:
      return state;
  }
};
