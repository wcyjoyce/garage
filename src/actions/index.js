const ROOT_URL = "https://wagon-garage-api.herokuapp.com";

export function fetchCars() {
  const url = `${ROOT_URL}/:garage/cars`;
  const promise = fetch(url).then(response => response.json());

  return {
    type: "FETCH_CARS",
    payload: promise
  }
}
