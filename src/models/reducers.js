import { combineReducers } from 'redux';
import repos from './repos/reducer';
import repo from './repo/reducer';

const rootReducer = combineReducers({ repos, repo });

export default rootReducer;
