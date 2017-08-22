import * as types from './actionTypes';

export function advanceTeam(game, team) {
	return (dispatch, getState) => {
		dispatch({type: types.ADVANCE_TEAM, game, team});
	}
}