import { SET_LOADING, STORE_USERS } from './types';
import axios from '../../axiosInstance';

const storeUsers = (users) => {
  return {
    type: STORE_USERS,
    users,
  };
};

const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

export const fetchUsers = (page) => {
  return (dispatch) => {
    dispatch(setLoading());
    axios
      .get('/', {
        params: {
          page,
        },
      })
      .then(({ data }) => dispatch(storeUsers(data.results)))
      .catch(() => {});
  };
};
