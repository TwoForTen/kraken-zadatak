import { STORE_USERS, SET_LOADING } from './types';

const initialState = {
  loading: false,
  users: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_USERS:
      return {
        loading: false,
        users: action.users,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default reducer;
