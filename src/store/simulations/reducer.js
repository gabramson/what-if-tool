import _ from 'lodash';
import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({});

export default function reduce(state = initialState, action = {}) {
    switch (action.type){
        case types.UPDATE_SIMULATIONS:
            return(_.orderBy(action.simulations, e => {return e.Probabilities.map(p => p/1000)}, Array.from(Array(6)).map(()=>('desc')) ));
        default:
            return state;
    }
}