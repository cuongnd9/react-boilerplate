import { FETCH_REPO_SUCCEEDED, FETCH_REPO_FAILDED, CLEAR_REPO } from '../constants/actionTypes';

const repoReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_REPO_SUCCEEDED:
      return action.payload;
    case FETCH_REPO_FAILDED:
      return {};
    case CLEAR_REPO:
      return {};
    default:
      return state;
  }
};

export default repoReducer;
