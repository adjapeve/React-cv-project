// CvOutput.js

import React, { Component } from "react";
import OutGeneralInfo from "./OutGeneralInfo";
import OutEducationExp from "./OutEducationExp";
import OutPracticalExp from "./OutPracticalExp";
class CvOutput extends Component {
  render() {
    return (
      <div>
        <h1>CV Output</h1>
        <OutGeneralInfo renderData={this.props.renderData} />
        {/* <OutEducationExp />
        <OutPracticalExp /> */}
      </div>
    );
  }
}

export default CvOutput;
