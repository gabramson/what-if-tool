import * as types from "./actionTypes";
import Immutable from "seamless-immutable";
import {GetTeamName} from "../teams/reducer";

const initialState = Immutable([
  1, 16, 8, 9, 5, 12, 4, 13, 6, 11, 3, 14, 7, 10, 2, 15, 
  17, 32, 24, 25, 21, 28, 20, 29, 22, 27, 19, 30, 23, 26, 18, 31, 
  33, 48, 40, 41, 37, 44, 36, 45, 38, 43, 35, 46, 39, 42, 34, 47,
  49, 64, 56, 57, 53, 60, 52, 61, 54, 59, 51, 62, 55, 58, 50, 63,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
]);

export default function reduce(state = initialState, action = {}) {
  const n = state.length;
  const rounds = Math.log2(n + 1) - 1;
  const currentSlot = action.line === types.lines.WINNER ? parseInt(action.game, 10) + 63 : 2 * (action.game - 1) + action.line;
  const nextSlot = Math.floor(currentSlot / 2) + Math.pow(2, rounds);
  switch (action.type) {
    case types.ADVANCE_TEAM:
      return [
        ...state.slice(0, nextSlot),
        state[currentSlot],
        ...state.slice(nextSlot + 1, n)
      ];
    case types.CLEAR_TEAM:
      const team = state[currentSlot];
      return [
        ...state.slice(0, currentSlot),
        0,
        ...state.slice(currentSlot + 1, n).map(x => x===team?0:x)
      ];
    case types.INITIAL_STATE_FETCHED:
      return action.tournament;
    default:
      return state;
  }
}

// selectors
export function getGameLines(state, props) {
  return [
    GetTeamName(state, state.tournament[2 * props.gameId - 2]),
    GetTeamName(state, state.tournament[2 * props.gameId - 1])
  ];
}

export function getWinnerLine(state, gameId) {
  return GetTeamName(state, state.tournament[parseInt(gameId, 10) + 63]);
}

export function getGames(state) {
  const n = state.tournament.length;
  const games = (n - 1) / 2;
  return games;
}

export function getSimulationInput(state) {
  const n = state.tournament.length;
  return state.tournament.slice(-(n - 1) / 2);
}
