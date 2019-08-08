import { combineReducers } from 'redux';
import reposReducer from './reposReducer';
import repoReducer from './repoReducer';

const rootReducer = combineReducers({ repos: reposReducer, repo: repoReducer });

export default rootReducer;
