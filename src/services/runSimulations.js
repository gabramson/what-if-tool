import _ from 'lodash';

const HOOPS_ENDPOINT = 'http://localhost';

export default async function getSimulationResults(tournamentState) {
    const queryString = _.map(tournamentState.tournament, function(e) {return `${e}`.padStart(2, "0")}).join("");
    const url = `${HOOPS_ENDPOINT}/RunSimulations/?state=${queryString}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    });
    if (!response.ok) {
        throw new Error(`RunSimulations service failed, HTTP status ${response.status}`);
      }
    const data = await response.json();
    const children = _.get(data, 'Results');
    if (!children) {
        throw new Error(`runSimulations failed, children not returned`);
    }
    return children;
}