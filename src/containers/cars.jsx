import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Sidebar from "../components/sidebar.jsx";
import { fetchCars } from "../actions";

class Cars extends Component {
  componentWillMount() {
    this.props.fetchCars();
  }

  renderCars() {
    return this.props.cars.map((car) => {
      return (
        <Link to={`cars/${car.id}`} key={car.id} className="car" >
          <i className="fa fa-car"></i>
          <div className="car-details">
            <div className="title">{car.brand} - {car.model}</div>
            <span className="tab">{car.owner}</span><span className="tab">{car.plate}</span>
          </div>
        </Link>
      );
    })
  }

  render() {
    if (this.props.cars.length === 0) {
      return (
        <div className="content">
          <Sidebar />
          <div className="details">There are no cars yet.</div>
        </div>
      );
    } else {
      return (
        <div className="content">
          <Sidebar />
          <div className="details">{this.renderCars()}</div>

        </div>
      );
    }
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars: fetchCars }, dispatch)
}

function mapStateToProps(state) {
  return { cars: state.cars };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cars);
