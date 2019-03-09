import * as types from "./actionTypes";
import { getTeams } from "../../services/teams";

export function fetchTeams() {
    return async function(dispatch, getState) {
      try {
        const teamNames = await getTeams();
        dispatch({ type: types.TEAMS_FETCHED, TeamNames: teamNames });
      } catch (error) {
        console.error(error);
      }
    };
  }
  