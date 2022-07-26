// OutPracticalExp.js

import React, { Component } from "react";
import OrganizeData from "./OrganizeData";

class OutPracticalExp extends Component {
  render() {
    const experienceElements = [];
    this.props.pEdata.forEach((experience) => {
      experienceElements.push(
        <OrganizeData
          experience={experience}
          key={experience.id}
          component="practical"
          onEditExperience={this.props.onEditExperience}
          onDeleteExperience={this.props.onDeleteExperience}
        />
      );
    });

    return (
      <div>
        <h2>Practical Experience</h2>
        {experienceElements}
      </div>
    );
  }
}

export default OutPracticalExp;
