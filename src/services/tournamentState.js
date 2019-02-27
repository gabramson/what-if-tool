import _ from "lodash";

const HOOPS_ENDPOINT = process.env.REACT_APP_BACKEND_BASEURL;

export async function getInitialState() {
  const url = `${HOOPS_ENDPOINT}/TournamentState/`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json"
    }
  });
  if (!response.ok) {
    throw new Error(
      `tournamentState service failed, HTTP status ${response.status}`
    );
  }
  const data = await response.json();
  const children = _.get(data, "TournamentState");
  if (!children) {
    throw new Error(`tournamentState failed, children not returned`);
  }
  return children;
}
