import * as types from './actionTypes';

export function advanceTeam(game, line) {
	return (dispatch, getState) => {
		dispatch({type: types.ADVANCE_TEAM, game, line});
	}
}