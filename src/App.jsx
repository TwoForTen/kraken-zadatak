import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Header from './components/Header/Header';
import Table from './components/Table/Table';

import { fetchUsers } from './store/Users/actions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers(1));
  }, [dispatch]);

  return (
    <>
      <Header />
      <Table />
    </>
  );
};

export default App;
