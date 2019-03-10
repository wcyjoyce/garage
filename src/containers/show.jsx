import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Sidebar from "../components/sidebar.jsx";
import { fetchCar, deleteCar } from "../actions";

class Show extends Component {
  componentWillMount() {
    if (!this.props.car) {
      this.props.fetchCar(this.props.match.params.id);
    }
  }

  handleClick = () => {
    this.props.deleteCar(this.props.history, this.props.car);
  }

  render() {
    if (!this.props.car) {
      return <p>Loading...</p>;
    }

    return (
      <div className="content">
        <Sidebar garage={this.props.garage} />
        <div className="details">
          <h3>{this.props.car.brand}</h3>
          <h2>{this.props.car.model}</h2>
          <div className="secondary-details">
            <span className="owner"><strong>Owner: </strong>{this.props.car.owner}</span>
            <span className="break">//</span>
            <strong>Plate: </strong><span className="tab">{this.props.car.plate}</span>
          </div>
          {this.props.car.owner}'s {this.props.car.brand} {this.props.car.model} is a beautiful car.
          <div><button className="button" onClick={this.handleClick}>Delete</button></div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCar: fetchCar, deleteCar: deleteCar }, dispatch);
}

function mapStateToProps(state, ownProps) {
  const id = parseInt(ownProps.match.params.id);
  return { car: state.cars.find(car => car.id === id) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Show);
