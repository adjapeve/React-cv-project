// OutEducationExp.js

import React, { Component } from "react";

class OrganizeData extends Component {
  render() {
    const experience = this.props.experience;
    return (
      <div>
        <h4>School Name</h4>
        <p>{experience.schoolName}</p>

        <h4>Title</h4>
        <p>{experience.title}</p>

        <h4>Date Finished</h4>
        <p>{experience.dateFinish}</p>
      </div>
    );
  }
}
class OutEducationExp extends Component {
  render() {
    const experienceElements = [];
    this.props.eEdata.forEach((experience) => {
      experienceElements.push(
        <OrganizeData experience={experience} key={experience.schoolName} />
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
