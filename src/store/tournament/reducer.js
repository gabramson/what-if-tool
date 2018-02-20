import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable([1,2,0]);

export default function reduce(state = initialState, action = {}) {
    switch (action.type){
        case types.ADVANCE_TEAM:
            return([1, 2, 1]);
        default:
            return state;
    }
}