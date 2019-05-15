import { combineReducers } from 'redux';
import reposReducer from './reposReducer';

const rootReducer = combineReducers({ repos: reposReducer });

export default rootReducer;
