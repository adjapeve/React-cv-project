// InEducationExp.js

import React, { Component } from "react";
import "../style/InputSections.css";

class InEducationExp extends Component {
  constructor(props) {
    super(props);
    this.handleDataChange = this.handleDataChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleDataChange(event) {
    this.props.onDataChange(event);
  }
  handleSubmit(event) {
    this.props.onEducationExpSubmit(event);
  }
  render() {
    return (
      <div>
        <h2>Education Experience</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            School Name
            <input
              type="text"
              id="schoolName"
              name="eEschoolName"
              value={this.props.eEschoolName}
              onChange={this.handleDataChange}
              required
            />
          </label>
          <label>
            Title
            <input
              type="text"
              id="title"
              name="eEtitle"
              value={this.props.eEtitle}
              onChange={this.handleDataChange}
              required
            />
          </label>
          <label>
            Date Finished
            <input
              type="date"
              id="schoolFinishDate"
              name="eEdateFinish"
              value={this.props.eEdateFinish}
              onChange={this.handleDataChange}
              required
            />
          </label>
          <button className="CvInput-button">Submit</button>
        </form>
      </div>
    );
  }
}

export default InEducationExp;
