import {
  FETCH_REPO,
  FETCH_REPO_SUCCEEDED,
  FETCH_REPO_FAILDED,
  CLEAR_REPO,
} from 'constants/actionTypes';

export const fetchRepoAction = name => ({
  type: FETCH_REPO,
  payload: name,
});

export const fetchRepoSucceededAction = repo => ({
  type: FETCH_REPO_SUCCEEDED,
  payload: repo,
});

export const fetchRepoFaildedAction = error => ({
  type: FETCH_REPO_FAILDED,
  payload: error,
});

export const clearRepoAction = () => ({
  type: CLEAR_REPO,
});
