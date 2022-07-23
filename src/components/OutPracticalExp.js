// OutPracticalExp.js

import React, { Component } from "react";

class OutPracticalExp extends Component {
  render() {
    return (
      <div>
        <h2>Practical Experience</h2>
        <h4>Company Name</h4>
        <p>{this.props.pEdata.company}</p>
        <h4>Position</h4>
        <p>{this.props.pEdata.position}</p>
        <h4>Main Tasks</h4>
        <p>{this.props.pEdata.tasks}</p>
        <h4>Date Started</h4>
        <p>{this.props.pEdata.dateStart}</p>
        <h4>Date Finished</h4>
        <p>{this.props.pEdata.dateFinish}</p>
      </div>
    );
  }
}

export default OutPracticalExp;
