import * as types from './actionTypes';
import getSimulationResults from '../../services/runSimulations'

export function runSimulations() {
	return async function(dispatch, getState) {
		try {
			const simulationResults = await getSimulationResults(getState());
			dispatch({type: types.UPDATE_SIMULATIONS, simulations: simulationResults});
		} catch(error) {
			console.error(error);
		}
	}
}