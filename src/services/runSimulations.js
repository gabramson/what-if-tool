import _ from 'lodash';

const HOOPS_ENDPOINT = 'http://localhost';

export async function getInitialState(tournamentState) {
    const url = `${HOOPS_ENDPOINT}/RunSimulations/`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    });
    if (!response.ok) {
        throw new Error(`tournamentState service failed, HTTP status ${response.status}`);
      }
    const data = await response.json();
    const children = _.get(data, 'Results');
    if (!children) {
        throw new Error(`runSimulations failed, children not returned`);
    }
    return children;
}