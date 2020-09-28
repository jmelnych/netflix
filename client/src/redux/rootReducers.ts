import { combineReducers } from 'redux';
import { moviesReducer } from './movies/reducer';
import { modalsReducer } from './modals/reducer';

export const rootReducer = combineReducers(
  {
    moviesReducer,
    modalsReducer,
  },
);

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
