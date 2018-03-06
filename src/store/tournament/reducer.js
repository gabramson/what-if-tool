import * as types from './actionTypes';
import Immutable from 'seamless-immutable';
import GetTeamName from '../../services/teams';

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
export function getGameLines(state, props){
    return [GetTeamName(state.tournament[2 * props.gameId - 2]), GetTeamName(state.tournament[2 * props.gameId - 1])];
};

export function getWinnerLine(state){
    return GetTeamName(state.tournament.slice(-1)[0]);
};

export function getGames(state){
    const n = state.tournament.length;
    const games = (n-1)/2;
    return games;
};