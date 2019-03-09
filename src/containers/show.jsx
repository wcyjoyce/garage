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
        <Sidebar key="sidebar" />
        <div className="details">
          <h3>{this.props.car.brand} - {this.props.car.model}</h3>
          <p>{this.props.car.owner}</p>
          <div className="plate">{this.props.car.plate}</div>
          <Link to="/" className="btn btn-primary">Back</Link>
          <button className="btn btn-warning" onClick={this.handleClick}>Delete</button>
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
