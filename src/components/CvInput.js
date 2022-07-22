// CvInput.js

import React, { Component } from "react";
import InGeneralInfo from "./InGeneralInfo";
import InEducationExp from "./InEducationExp";
import InPracticalExp from "./InPracticalExp";

class CvInput extends Component {
  render() {
    return (
      <div>
        <h1>CV Input</h1>
        <InGeneralInfo
          gIname={this.props.entryData.gIname}
          gIemail={this.props.entryData.gIemail}
          gIphone={this.props.entryData.gIphone}
          onDataChange={this.props.onDataChange}
          onGeneralInfoSubmit={this.props.onGeneralInfoSubmit}
        />
        {/* <br />
        <InEducationExp />
        <br />
        <InPracticalExp /> */}
      </div>
    );
  }
}

export default CvInput;
