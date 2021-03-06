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
        quantity: action.payload.length - 1,
        data: action.payload,
      };
    }
    case LOADING:
      return { ...state, loading: true, error: '' };

    case ERROR:
      throw { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
