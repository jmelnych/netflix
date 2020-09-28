import { createAction } from 'redux-actions';
import types from './types';

const openModal = createAction(types.OPEN_MODAL);
const closeModal = createAction(types.CLOSE_MODAL);

export default {
    openModal,
    closeModal,
}
