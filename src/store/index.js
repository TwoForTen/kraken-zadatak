import { combineReducers } from 'redux';

import usersReducer from './Users/reducer';
import modalReducer from './Modal/reducer';

const reducers = combineReducers({
  users: usersReducer,
  modal: modalReducer,
});

export default reducers;
