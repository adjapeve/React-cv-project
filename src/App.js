// App.js

import React, { Component } from "react";
import uniqid from "uniqid";
import CvInput from "./components/CvInput";
import CvOutput from "./components/CvOutput";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gIname: "",
      gIemail: "",
      gIphone: "",
      eEid: "",
      eEschoolName: "",
      eEtitle: "",
      eEdateFinish: "",
      pEcompany: "",
      pEposition: "",
      pEtasks: "",
      pEdateStart: "",
      pEdateFinish: "",
      gIdata: { name: "", email: "", phone: "" },
      eEdata: [],
      pEdata: [],
    };
    this.handleDataChange = this.handleDataChange.bind(this);
    this.handleGeneralInfoSubmit = this.handleGeneralInfoSubmit.bind(this);
    this.handleEducationExpSubmit = this.handleEducationExpSubmit.bind(this);
    this.handlePracticalExpSubmit = this.handlePracticalExpSubmit.bind(this);
    this.handleEditExperience = this.handleEditExperience.bind(this);
    this.handleDeleteExperience = this.handleDeleteExperience.bind(this);
  }
  handleDataChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }
  handleGeneralInfoSubmit(event) {
    event.preventDefault();
    this.setState({
      gIdata: {
        name: this.state.gIname,
        email: this.state.gIemail,
        phone: this.state.gIphone,
      },
    });
  }
  handleEducationExpSubmit(event) {
    event.preventDefault();
    let filledExp = {
      schoolName: this.state.eEschoolName,
      title: this.state.eEtitle,
      dateFinish: this.state.eEdateFinish,
    };
    //when editing an experience
    if (this.state.eEid) {
      filledExp.id = this.state.eEid;
      const modifiedExperiences = this.state.eEdata.map((exp) => {
        if (exp.id === this.state.eEid) {
          exp = filledExp;
        }
        return exp;
      });
      this.setState(() => ({
        eEdata: modifiedExperiences,
      }));
    }
    //when adding a new experience
    else {
      filledExp.id = uniqid();
      this.setState((state) => ({
        eEdata: state.eEdata.concat(filledExp),
      }));
    }
    this.setState({
      eEid: "",
      eEschoolName: "",
      eEtitle: "",
      eEdateFinish: "",
    });
  }

  handlePracticalExpSubmit(event) {
    event.preventDefault();
    let filledExp = {
      id: uniqid(),
      company: this.state.pEcompany,
      position: this.state.pEposition,
      tasks: this.state.pEtasks,
      dateStart: this.state.pEdateStart,
      dateFinish: this.state.pEdateFinish,
    };
    this.setState((state) => ({
      pEdata: state.pEdata.concat(filledExp),
    }));
  }
  handleEditExperience(id, event) {
    event.preventDefault();
    const exp = this.state.eEdata.find((exp) => exp.id === id);
    this.setState({
      eEid: id,
      eEschoolName: exp.schoolName,
      eEtitle: exp.title,
      eEdateFinish: exp.dateFinish,
    });
  }
  handleDeleteExperience(id, event) {
    event.preventDefault();
    this.setState((prevState) => ({
      eEdata: prevState.eEdata.filter((experience) => experience.id !== id),
    }));
  }

  render() {
    return (
      <div>
        <CvInput
          entryData={this.state}
          onDataChange={this.handleDataChange}
          onGeneralInfoSubmit={this.handleGeneralInfoSubmit}
          onEducationExpSubmit={this.handleEducationExpSubmit}
          onPracticalExpSubmit={this.handlePracticalExpSubmit}
        />
        <CvOutput
          gIdata={this.state.gIdata}
          eEdata={this.state.eEdata}
          pEdata={this.state.pEdata}
          onEditExperience={this.handleEditExperience}
          onDeleteExperience={this.handleDeleteExperience}
        />
      </div>
    );
  }
}

export default App;
