// OutEducationExp.js

import React, { Component } from "react";
import OrganizeData from "./OrganizeData";

class OutEducationExp extends Component {
  render() {
    const experienceElements = [];
    this.props.eEdata.forEach((experience) => {
      experienceElements.push(
        <OrganizeData
          dataForm={experience}
          key={experience.id}
          component="education"
          onEditForm={this.props.onEditForm}
          onDeleteExperience={this.props.onDeleteExperience}
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
