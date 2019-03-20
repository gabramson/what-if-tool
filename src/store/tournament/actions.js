import * as types from "./actionTypes";
import { getInitialState } from "../../services/tournamentState";
import { runSimulations } from "../simulations/actions";

export function advanceTeam(game, line) {
  return (dispatch, getState) => {
    dispatch({ type: types.ADVANCE_TEAM, game, line });
  };
}

export function clearTeam(game, line) {
  return (dispatch, getState) => {
    dispatch({ type: types.CLEAR_TEAM, game, line });
  };
}

export function fetchInitialState() {
  return async function(dispatch, getState) {
    try {
      const initialState = await getInitialState();
      dispatch({ type: types.INITIAL_STATE_FETCHED, tournament: initialState });
      dispatch(runSimulations());
    } catch (error) {
      console.error(error);
    }
  };
}
