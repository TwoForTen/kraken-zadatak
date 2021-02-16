import { CLOSE_MODAL, OPEN_MODAL } from './types';

export const openModal = (user) => {
  return {
    type: OPEN_MODAL,
    user,
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  };
};
