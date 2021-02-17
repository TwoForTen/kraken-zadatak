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

export const fetchUsers = (page, results) => {
  return (dispatch) => {
    dispatch(setLoading());
    axios
      .get('/', {
        params: {
          page,
          results,
        },
      })
      .then(({ data }) => dispatch(storeUsers(data.results)))
      .catch(() => {});
  };
};
