import { FETCH_SUCCESS, FETCH_ERROR, CLEAR } from './constants';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return action.payload;
    case FETCH_ERROR:
      return {};
    case CLEAR:
      return {};
    default:
      return state;
  }
};

export default reducer;
