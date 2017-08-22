import { Thunk } from 'redux-testkit';
import * as types from '../actionTypes';
import * as tournamentActions from '../actions';

describe('store/topics/actions', () => {
	it('should advance team 1', () => {
		const dispatches = Thunk(tournamentActions.advanceTeam).execute(1, 1);
		expect(dispatches.length).toBe(1);
		expect(dispatches[0].getAction()).toEqual({type: types.ADVANCE_TEAM, game: 1, team: 1});
	});
});