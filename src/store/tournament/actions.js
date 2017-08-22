import * as types from './actionTypes';

export function advanceTeam(team) {
	return (dispatch, getState) => {
		dispatch({type: types.ADVANCE_TEAM, team});
	}
}