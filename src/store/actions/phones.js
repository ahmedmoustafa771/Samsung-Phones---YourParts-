import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchPhonesStart = () => {
    return {
        type: actionTypes.FETCH_PHONES_START,
    };
};

export const fetchPhonesSuccess = (phonesArray, numberOfProducts) => {
    return {
        type: actionTypes.FETCH_PHONES_SUCCESS,
        phoneArray: phonesArray,
        numberOfProducts: numberOfProducts,
    };
};

export const fetchPhonesFail = (error) => {
    return {
        type: actionTypes.FETCH_PHONES_FAIL,
        error: error,
    };
};

export const fetchPhones = (numberOfProducts) => {
    return dispatch => {
        dispatch(fetchPhonesStart());
        axios.get(`https://fonoapi.freshpixl.com/v1/getlatest?token=7843d430c1ececf666ca37e7c63c5d8a22870add4ea39f41&brand=samsung&limit=${numberOfProducts}`)
        .then(res => {
            dispatch(fetchPhonesSuccess(res.data, numberOfProducts));
        })
        .catch(err => {
            dispatch(fetchPhonesFail(err.message));
        });
    };
};

export const fetchPhonesIncrease= () => {
    return {
        type: actionTypes.FETCH_PHONES_INCREASE,
    };
};

export const fetchAllPhonesStart = () => {
    return {
        type: actionTypes.FETCH_ALL_PHONES_START,
    };
};

export const fetchAllPhonesSuccess = (AllPhonesArray) => {
    return {
        type: actionTypes.FETCH_ALL_PHONES_SUCCESS,
        AllPhonesArray: AllPhonesArray,
    };
};

export const fetchAllPhonesFail = (error) => {
    return {
        type: actionTypes.FETCH_ALL_PHONES_FAIL,
        error: error,
    };
};

export const fetchAllPhones = () => {
    return dispatch => {
        dispatch(fetchAllPhonesStart());
        axios.get(`https://fonoapi.freshpixl.com/v1/getlatest?token=7843d430c1ececf666ca37e7c63c5d8a22870add4ea39f41&brand=samsung`)
        .then(res => {
            dispatch(fetchAllPhonesSuccess(res.data));
        })
        .catch(err => {
            dispatch(fetchAllPhonesFail(err.message));
        });
    };
};

export const changeSettingsState = (autoGenerateState) => {
    return {
        type: actionTypes.CHANGING_SETTINGS_STATE,
        autoGenerateState: autoGenerateState,
    };
};