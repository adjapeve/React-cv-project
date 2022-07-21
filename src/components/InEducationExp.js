// InEducationExp.js

import React, { Component } from "react";

class InEducationExp extends Component {
  render() {
    return (
      <div>
        <h2>Education Experience</h2>
        <form>
          <label>
            School Name
            <input type="text" id="schoolName" name="schoolName" value="UDEC" />
          </label>
          <label>
            Title
            <input
              type="text"
              id="title"
              name="title"
              value="Software Engineer"
            />
          </label>
          <label>
            Date Finished
            <input
              type="date"
              id="schoolFinishDate"
              name="schoolFinishDate"
              value="2013"
            />
          </label>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default InEducationExp;
