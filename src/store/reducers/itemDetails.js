import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const intialState = {
    showModal: false,
    selectedPhone: null
};

const reducer = (state = intialState, action) => {
    switch (action.type) {
        case actionTypes.ON_OPEN_MODAL:
            return updateObject(state, {showModal: action.showModal, selectedPhone:action.selectedPhone});
        case actionTypes.ON_CLOSE_MODAL:
            return updateObject(state, {showModal: action.showModal});
        default:
            return state;
    }
};

export default reducer;