import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const intialState = {
    phoneArray: [],
    AllPhonesArray: [],
    loading: false,
    numberOfProducts: 10,
    autoGenerateState: true,
    error: null
};

const reducer = (state = intialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_PHONES_START:
            return updateObject(state, {loading: true});
        case actionTypes.FETCH_PHONES_SUCCESS:
            return updateObject(state, {phoneArray: action.phoneArray, loading: false, error: null});
        case actionTypes.FETCH_PHONES_FAIL:
            return updateObject(state, {error: action.error, loading: false});
        case actionTypes.FETCH_PHONES_INCREASE:
            return updateObject(state, { numberOfProducts: state.numberOfProducts + 10});
        case actionTypes.FETCH_ALL_PHONES_START:
            return updateObject(state, {loading: true});
        case actionTypes.FETCH_ALL_PHONES_SUCCESS:
            return updateObject(state, {AllPhonesArray: action.AllPhonesArray, loading: false, error: null});
        case actionTypes.FETCH_ALL_PHONES_FAIL:
            return updateObject(state, {error: action.error, loading: false});
        case actionTypes.CHANGING_SETTINGS_STATE:
        return updateObject(state, {autoGenerateState: action.autoGenerateState});
        default:
            return state;
    }
};

export default reducer;