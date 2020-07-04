import * as actionTypes from './actionTypes';

export const onOpenModal = (selectedPhone) => {
    return {
        type: actionTypes.ON_OPEN_MODAL,
        showModal: true,
        selectedPhone: selectedPhone
    };
};

export const onCancelModal = () => {
    return {
        type: actionTypes.ON_CLOSE_MODAL,
        showModal: false
    };
};


