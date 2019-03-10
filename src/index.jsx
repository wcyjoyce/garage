import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";
import logger from "redux-logger";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createHistory as history } from "history";
import { reducer as formReducer } from "redux-form";
import { AnimatedSwitch } from "react-router-transition";

import "../assets/stylesheets/application.scss";

import Cars from "./containers/cars.jsx";
import New from "./containers/new.jsx";
import Show from "./containers/show.jsx";

import carsReducer from "./reducers/cars_reducer.js";

const initialState = {
  garage: "Joyce",
  cars: []
};

const reducers = combineReducers({
  garage: (state = null) => state,
  cars: carsReducer,
  form: formReducer
})

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Cars} />
        <Route path="/cars/new" exact component={New} />
        <Route path="/cars/:id" component={Show} />
      </Switch>
    </Router>
  </Provider>,
  document.querySelector(".container")
);
