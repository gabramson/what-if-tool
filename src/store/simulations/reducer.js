import _ from 'lodash';
import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({});

export default function reduce(state = initialState, action = {}) {
    console.log(action);
    switch (action.type){
        case types.UPDATE_SIMULATIONS:
            return(_.orderBy(action.simulations, function(e) {return [e.Probabilities[0]/1000]}, ['desc', 'desc', 'desc', 'desc', 'desc', 'desc']));
        default:
            return state;
    }
}