import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";
import logger from "redux-logger";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createHistory as history } from "history";

import "../assets/stylesheets/application.scss";

import Cars from "./containers/cars.jsx";

import carsReducer from "./reducers/cars_reducer.js";

const identityReducer = (state = null) => state;

// const garageName: prompt("What is your garage?") || `garage${Math.floor(10 + (Math.random() * 90))}`;
const garageName = "Joyce";
const initialState = {
  garage: garageName,
  cars: []
};

const reducers = combineReducers({
  garage: identityReducer,
  cars: carsReducer
})

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Cars} />
      </Switch>
    </Router>
  </Provider>,
  document.querySelector(".container")
);
