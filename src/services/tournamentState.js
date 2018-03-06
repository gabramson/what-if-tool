import _ from 'lodash';

const HOOPS_ENDPOINT = 'http://localhost';

export async function getInitialState() {
    const url = `${HOOPS_ENDPOINT}/TournamentState/`;
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
    const children = _.get(data, 'TournamentState');
    console.log(children); 
    if (!children) {
        throw new Error(`tournamentState failed, children not returned`);
    }
    return children;
}