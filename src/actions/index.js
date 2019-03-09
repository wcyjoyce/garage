const ROOT_URL = "https://wagon-garage-api.herokuapp.com";

export function fetchCars() {
  const url = `${ROOT_URL}/:garage/cars`;
  const promise = fetch(url).then(response => response.json());

  return {
    type: "FETCH_CARS",
    payload: promise
  }
}

export function createCar(body, callback) {
  const url = `${ROOT_URL}/:garage/cars`;
  const promise = fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  }).then(response => response.json())
    .then(callback);

  return {
    type: "CREATE_CAR",
    payload: promise
  }
}

export function fetchCar(id) {
  const url = `${ROOT_URL}/cars/${id}`;
  const promise = fetch(url).then(response => response.json());

  return {
    type: "FETCH_CAR",
    payload: promise
  };
}

export function deleteCar(history, car) {
  const url = `${ROOT_URL}/cars/${car.id}`;
  fetch(url, { method: "DELETE" })
    .then(response => response.json())
    .then(() => history.push(""));

  return {
    type: "DELETE_CAR",
    payload: car
  }
}
