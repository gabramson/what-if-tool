import * as types from "./actionTypes";

const defaultRegions = [
        "",
        "",
        "",
        ""
];

export default function reduce(state = defaultRegions, action = {}) {
    switch (action.type) {
      case types.REGIONS_FETCHED:
        // return state;
        return action.Regions;
      default:
        return state;
    }
  }
  
  //Selectors
export function GetRegion(state, regionId) {
    return state.regions[regionId - 1];
  }
  