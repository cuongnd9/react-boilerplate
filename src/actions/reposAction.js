import {
  FETCH_REPOS,
  FETCH_REPOS_SUCCEEDED,
  FETCH_REPOS_FAILDED
} from '../constants/actionTypes';

export const fetchReposAction = () => ({
  type: FETCH_REPOS
});

export const fetchReposSucceededAction = repos => ({
  type: FETCH_REPOS_SUCCEEDED,
  payload: repos
});

export const fetchReposFaildedAction = error => ({
  type: FETCH_REPOS_FAILDED,
  payload: error
});
