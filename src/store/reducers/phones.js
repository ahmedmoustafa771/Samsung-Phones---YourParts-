import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const intialState = {
    phoneArray: [],
    AllPhonesArray: [],
    loading: false,
    numberOfProducts: 10
};

const reducer = (state = intialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_PHONES_START:
            return updateObject(state, {loading: true});
        case actionTypes.FETCH_PHONES_SUCCESS:
            return updateObject(state, {phoneArray: action.phoneArray, loading: false});
        case actionTypes.FETCH_PHONES_INCREASE:
            return updateObject(state, { numberOfProducts: state.numberOfProducts + 10});
        case actionTypes.FETCH_ALL_PHONES_START:
            return updateObject(state, {loading: true});
        case actionTypes.FETCH_ALL_PHONES_SUCCESS:
            return updateObject(state, {AllPhonesArray: action.AllPhonesArray, loading: false});
        default:
            return state;
    }
};

export default reducer;