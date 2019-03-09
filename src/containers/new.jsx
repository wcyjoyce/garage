import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { reduxForm, Field } from "redux-form";

import Sidebar from "../components/sidebar.jsx";
import { createCar } from "../actions";

class New extends Component {
  onSubmit = (values) => {
    this.props.createCar(values, (post) => {
      this.props.history.push("/"); // callback: similar to "redirect_to" in Ruby
      return post;
    });
  }

  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input type={field.type} {...field.input} />
      </div>
    );
  }

  render() {
    return (
      <div className="content">
        <Sidebar key="sidebar" />
        <div className="details">
          <h1>Add New Car</h1>
          <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <Field label="Brand" name="brand" type="text" component={this.renderField} />
            <Field label="Model" name="model" type="text" component={this.renderField} />
            <Field label="Owner" name="owner" type="text" component={this.renderField} />
            <Field label="Plate" name="plate" type="text" component={this.renderField} />
            <button className="btn btn-danger" type="submit">Create Car</button>
            <Link className="btn btn-warning" to="/" >Back</Link>
          </form>
        </div>
      </div>
    );
  }
}

export default reduxForm({ form: "newPostForm" })( connect(null, { createCar: createCar })(New) );
