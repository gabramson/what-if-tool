import * as types from '../actionTypes';
import Immutable from 'seamless-immutable';
import { Reducer } from 'redux-testkit';
import uut from '../reducer';

const initialState = Immutable([1,2,0]);

describe('store/tournament/reducer', () => {
    it('should have initial state', () => {
        expect(uut()).toEqual(initialState);
    });

    it('should not affect state', () => {
        Reducer(uut).expect({type: 'NOT_EXISTING'}).toReturnState(initialState);
    });

    it('should return passed state', () => {
        const existingState = Immutable([3,4,0]);
        Reducer(uut).withState(existingState).expect({}).toReturnState(existingState);
    });

    it('should advance game 1, top line', () => {
        const startState = Immutable([1,2,0]);
        const endState = Immutable([1,2,1]);
        const action = {type: types.ADVANCE_TEAM, game: 1, line: types.lines.TOP};
        Reducer(uut).withState(startState).expect(action).toReturnState(endState);
    });
});
    