import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchCars } from "../actions";

class Cars extends Component {
  componentWillMount() {
    this.props.fetchCars();
  }

  renderCars() {
    return this.props.cars.map((car) => {
      return (
        <Link to={`cars/${car.id}`} key={car.id} >
          <h3>{car.brand} - {car.model}</h3>
          <p><strong>Owner: </strong>{car.owner}</p>
        </Link>
      );
    })
  }

  render() {
    return (
      <div>
        <Link className="btn btn-primary" to="/cars/new">
          New Car
        </Link>
        {this.renderCars()}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars: fetchCars }, dispatch)
}

function mapStateToProps(state) {
  return { cars: state.cars };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cars);
