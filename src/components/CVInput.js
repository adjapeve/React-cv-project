// CVInput.js

import React, { Component } from "react";
import InGeneralInfo from "./InGeneralInfo";
import InEducationExp from "./InEducationExp";
import InPracticalExp from "./InPracticalExp";

class CVInput extends Component {
  render() {
    return (
      <div>
        <h1>CV Input</h1>
        <InGeneralInfo />
        <br />
        <InEducationExp />
        <br />
        <InPracticalExp />
      </div>
    );
  }
}

export default CVInput;
