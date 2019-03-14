import * as types from "./actionTypes";
import { getRegions } from "../../services/regions.js";

export function fetchRegions() {
    return async function(dispatch, getState) {
      try {
        const regions = await getRegions();
        dispatch({ type: types.REGIONS_FETCHED, Regions: regions });
      } catch (error) {
        console.error(error);
      }
    };
  }
  