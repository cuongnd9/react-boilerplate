import { FETCH_SUCCESS, FETCH_ERROR } from './constants';

const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return action.payload;
    case FETCH_ERROR:
      return [];
    default:
      return state;
  }
};

export default reducer;
