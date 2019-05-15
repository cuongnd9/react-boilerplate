import {
  FETCH_REPOS_SUCCEEDED,
  FETCH_REPOS_FAILDED
} from '../constants/actionTypes';

const reposReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_REPOS_SUCCEEDED:
      return action.payload;
    case FETCH_REPOS_FAILDED:
      return [];
    default:
      return state;
  }
};

export default reposReducer;
