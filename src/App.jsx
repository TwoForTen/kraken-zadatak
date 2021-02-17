import { useSelector } from 'react-redux';

import Header from './components/Header/Header';
import Table from './components/Table/Table';
import Modal from './components/Modal/Modal';

const App = () => {
  const { open } = useSelector((state) => state.modal);

  return (
    <>
      {open && <Modal />}
      <Header />
      <Table />
    </>
  );
};

export default App;
