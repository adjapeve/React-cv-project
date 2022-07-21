// InPracticalExp.js

import React, { Component } from "react";

class InPracticalExp extends Component {
  render() {
    return (
      <div>
        <h2>Practical Experience</h2>
        <form>
          <label>
            Company Name
            <input
              type="text"
              id="companyName"
              name="companyName"
              value="BOCC"
            />
          </label>
          <label>
            Position
            <input
              type="text"
              id="position"
              name="position"
              value="Integration Analyst"
            />
          </label>
          <label>
            Main Tasks
            <textarea value="a b ad c" id="tasks" name="tasks" />
          </label>
          <label>
            Date Started
            <input type="date" id="jobStarted" name="jobStarted" value="2014" />
          </label>
          <label>
            Date Finished
            <input
              type="date"
              id="jobFinished"
              name="jobFinished"
              value="2018"
            />
          </label>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default InPracticalExp;
