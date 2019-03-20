const HOOPS_ENDPOINT = process.env.REACT_APP_BACKEND_BASEURL;

export async function getTeams() {
    const url = `${HOOPS_ENDPOINT}/Teams/`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    });
    if (!response.ok) {
      throw new Error(
        `Teams service failed, HTTP status ${response.status}`
      );
    }
    const data = await response.json();
    const children = data.TeamNames;
    if (!children) {
      throw new Error(`Teams failed, children not returned`);
    }
    return children;
}