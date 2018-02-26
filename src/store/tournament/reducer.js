import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable([1,2,0]);

export default function reduce(state = initialState, action = {}) {
    const n = state.length;
    const rounds = Math.log2(n+1)-1;
    const currentSlot = 2*(action.game - 1) + action.line;
    const nextSlot = Math.floor(currentSlot/2) + Math.pow(2, rounds)
    switch (action.type){
        case types.ADVANCE_TEAM:
            return([
                ...state.slice(0, nextSlot),
                state[currentSlot],
                ...state.slice(nextSlot + 1, n)
            ]);
        default:
            return state;
    }
}

// selectors

export function getLines(state, props){
//    console.log(props);
    return [state[2 * props.gameId - 2], state[2 * props.gameId - 1]];
//    return [1, 2];
};