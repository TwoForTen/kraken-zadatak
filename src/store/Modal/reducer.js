import { OPEN_MODAL, CLOSE_MODAL } from './types';

const initialState = {
  open: false,
  content: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        open: true,
        content: action.user,
      };
    case CLOSE_MODAL:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
