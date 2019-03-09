const carsReducer = (state = [], action) => {
  switch(action.type) {
    case "FETCH_CARS": {
      return action.payload;
    }
    case "FETCH_CAR": {
      return [ action.payload ];
    }
    case "DELETE_CAR": {
      return state.filter(car => car !== action.payload);
    }
    default:
      return state;
  }
}

export default carsReducer;
