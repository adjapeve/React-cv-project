// OutEducationExp.js

import React, { Component } from "react";
import OrganizeData from "./OrganizeData";

class OutEducationExp extends Component {
  render() {
    const experienceElements = [];
    this.props.eEdata.forEach((experience) => {
      experienceElements.push(
        <OrganizeData
          experience={experience}
          key={experience.id}
          component="education"
          onEditExperience={this.props.onEditExperience}
        />
      );
    });

    return (
      <div>
        <h2>Education Experience</h2>
        {experienceElements}
      </div>
    );
  }
}

export default OutEducationExp;
