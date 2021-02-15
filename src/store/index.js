import { combineReducers } from 'redux';

import usersReducer from './Users/reducer';

const reducers = combineReducers({
  users: usersReducer,
});

export default reducers;
