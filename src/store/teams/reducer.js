import * as types from "./actionTypes";

const defaultTeams = {
  TeamNames: [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
  ]
};

export default function reduce(state = defaultTeams, action = {}) {
  switch (action.type) {
    case types.TEAMS_FETCHED:
      // return state;
      return action.TeamNames;
    default:
      return state;
  }
}

//Selectors
export function GetTeamName(state, teamId) {
  if (typeof state.teams === undefined) {
    return "____";
  }
  return teamId === 0 ? "______" : state.teams[teamId - 1];
}
