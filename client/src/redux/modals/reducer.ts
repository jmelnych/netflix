import types from './types';

interface State {
  openModalName: string,
    selectedMovieId: number,

}

const initialState: State = {
  openModalName: null,
  selectedMovieId: null,
};

export const modalsReducer = (state = initialState, action: any) => {
  const { payload } = action;
  switch (action.type) {
    case types.OPEN_MODAL:
      return { ...state, openModalName: payload.modalName, selectedMovieId: payload.id };
    case types.CLOSE_MODAL:
      return { ...state, openModalName: null, selectedMovieId: null };
    default:
      return state;
  }
};
