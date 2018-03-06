import { Thunk } from 'redux-testkit';
import * as types from '../actionTypes';
import * as uut from '../actions';

describe('store/tournament/actions', () => {
	it('should advance top line in game 1', () => {
		const dispatches = Thunk(uut.advanceTeam).execute(1, types.lines.TOP);
		expect(dispatches.length).toBe(1);
		expect(dispatches[0].getAction()).toEqual({type: types.ADVANCE_TEAM, game: 1, line: types.lines.TOP});
	});
});