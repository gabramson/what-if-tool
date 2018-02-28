import * as types from '../actionTypes';
import Immutable from 'seamless-immutable';
import { Reducer } from 'redux-testkit';
import uut from '../reducer';

describe('store/tournament/reducer', () => {
    it('should have initial state', () => {
        const initialState = Immutable([1,2,0]);
        expect(uut()).toEqual(initialState);
    });

    it('should not affect state', () => {
        const initialState = Immutable([1,2,0]);
        Reducer(uut).expect({type: 'NOT_EXISTING'}).toReturnState(initialState);
    });

    it('should return passed state', () => {
        const existingState = Immutable([3,4,0]);
        Reducer(uut).withState(existingState).expect({}).toReturnState(existingState);
    });

    it('should advance game 1, top line', () => {
        const startState = Immutable([1, 2, 3, 4, 0, 0, 0]);
        const endState = Immutable([1, 2, 3, 4, 1, 0, 0]);
        const action = {type: types.ADVANCE_TEAM, game: 1, line: types.lines.TOP};
        Reducer(uut).withState(startState).expect(action).toReturnState(endState);
    });

    it('should play mini-tornament correctly', () => {
        const startState = Immutable([1, 2, 3, 4, 0, 0, 0]);
        const game1Action = {type: types.ADVANCE_TEAM, game: 1, line: types.lines.TOP};
        const game1NextState = Immutable([1, 2, 3, 4, 1, 0, 0]);
        const game2Action = {type: types.ADVANCE_TEAM, game: 2, line: types.lines.BOTTOM};
        const game2NextState = Immutable([1, 2, 3, 4, 1, 4, 0]);
        const game3Action = {type: types.ADVANCE_TEAM, game: 3, line: types.lines.BOTTOM};
        const game3NextState = Immutable([1, 2, 3, 4, 1, 4, 4]);
        Reducer(uut).withState(startState).expect(game1Action).toReturnState(game1NextState);
        Reducer(uut).withState(game1NextState).expect(game2Action).toReturnState(game2NextState);
        Reducer(uut).withState(game2NextState).expect(game3Action).toReturnState(game3NextState);
    });
});
    