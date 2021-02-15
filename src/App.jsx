import { useEffect } from 'react';
import Header from './components/Header/Header';
import { useDispatch } from 'react-redux';

import { fetchUsers } from './store/Users/actions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers(1));
  }, [dispatch]);

  return <Header />;
};

export default App;
