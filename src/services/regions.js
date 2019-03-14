const HOOPS_ENDPOINT = process.env.REACT_APP_BACKEND_BASEURL;

export async function getRegions() {
    const url = `${HOOPS_ENDPOINT}/Regions/`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    });
    if (!response.ok) {
      throw new Error(
        `Regions service failed, HTTP status ${response.status}`
      );
    }
    const data = await response.json();
    const children = data.Regions;
    if (!children) {
      throw new Error(`Regions failed, children not returned`);
    }
    return children;
}