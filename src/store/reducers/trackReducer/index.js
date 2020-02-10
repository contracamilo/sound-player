import { FORWARD, BACKWARD, LOADING, ERROR } from '../../types/ActionTypes';

export const INITIAL_STATE = {
  loading: '',
  error: '',
  data: [],
  currentTrack: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FORWARD: {
      return {
        ...state,
        loading: false,
        error: '',
        currentTrack: action.payload,
      };
    }
    case BACKWARD: {
      return {
        ...state,
        loading: false,
        error: '',
        currentTrack: action.payload,
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
