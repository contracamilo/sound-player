import { SET_REF, ERROR, LOADING } from '../../types/ActionTypes';

export const INITIAL_STATE = {
  tag:'',
  error: '',
  loading: true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_REF: {
      return {
        ...state,
        loading: false,
        error: '',
        ref: action.payload,
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
