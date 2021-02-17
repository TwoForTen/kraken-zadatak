import { useSelector } from 'react-redux';

import Header from './components/Header/Header';
import Table from './components/Table/Table';
import Modal from './components/Modal/Modal';
import Loader from './components/Loader/Loader';

const App = () => {
  const {
    modal: { open },
    users: { loading },
  } = useSelector((state) => state);

  return (
    <>
      {open && <Modal />}
      <Header />
      {loading && <Loader />}
      <Table />
    </>
  );
};

export default App;
