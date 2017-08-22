import { Thunk } from 'redux-testkit';
import * as tournamentActions from '../actions';

describe('store/topics/actions', () => {
	it('should advance team 1', () => {
		const dispatches = Thunk(tournamentActions.advanceTeam).execute(1);
		expect(dispatches.length).toBe(1);
	});
});