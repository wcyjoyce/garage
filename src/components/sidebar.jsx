import React, { Component } from "react";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <div className="title">{props.garage ? props.garage + "'s Garage" : "Joyce's Garage"}</div>
      <div className="description">This is a garage description.</div>
      <div className="actions">
        <Link to="/"><i className="fa fa-list"></i>Car List</Link>
        <Link to="/cars/new"><i className="fa fa-cog"></i>Add Car</Link>
      </div>
    </div>
  );
}

export default Sidebar;
