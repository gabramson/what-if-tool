import * as types from './actionTypes';
import {getSimulationInput} from '../tournament/reducer'
import getSimulationResults from '../../services/runSimulations'

export function runSimulations() {
	return async function(dispatch, getState){
		try {
			const simulationInput = getSimulationInput(getState());
			console.log(simulationInput);
			const simulationResults = await getSimulationResults(simulationInput);
			dispatch({type: types.UPDATE_SIMULATIONS, simulations: simulationResults});
		} catch(error) {
			console.error(error);
		}
	}
}