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

describe('store/tournament/actions', () => {
	it('should clear top line in game 33', () => {
		const dispatches = Thunk(uut.clearTeam).execute(33, types.lines.TOP);
		expect(dispatches.length).toBe(1);
		expect(dispatches[0].getAction()).toEqual({type: types.CLEAR_TEAM, game: 33, line: types.lines.TOP});
	});
});