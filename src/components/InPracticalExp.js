// InPracticalExp.js

import React, { Component } from "react";
import "../style/InputSections.css";

class InPracticalExp extends Component {
  constructor(props) {
    super(props);
    this.handleDataChange = this.handleDataChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleDataChange(event) {
    this.props.onDataChange(event);
  }
  handleSubmit(event) {
    this.props.onPracticalExpSubmit(event);
  }
  render() {
    return (
      <div>
        <h2>Practical Experience</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Company Name
            <input
              type="text"
              id="companyName"
              name="pEcompany"
              value={this.props.pEcompany}
              onChange={this.handleDataChange}
              required
            />
          </label>
          <label>
            Position
            <input
              type="text"
              id="position"
              name="pEposition"
              value={this.props.pEposition}
              onChange={this.handleDataChange}
              required
            />
          </label>
          <label>
            Main Tasks
            <textarea
              id="tasks"
              name="pEtasks"
              value={this.props.pEtasks}
              onChange={this.handleDataChange}
            />
          </label>
          <label>
            Date Started
            <input
              type="date"
              id="jobStarted"
              name="pEdateStart"
              value={this.props.pEdateStart}
              onChange={this.handleDataChange}
              required
            />
          </label>
          <label>
            Date Finished
            <input
              type="date"
              id="jobFinished"
              name="pEdateFinish"
              value={this.props.pEdateFinish}
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

export default InPracticalExp;
