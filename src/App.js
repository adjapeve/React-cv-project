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
      pEid: "",
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
      this.setState((prevState) => {
        const eEdata = prevState.eEdata.map((experience) => {
          if (experience.id === prevState.eEid) {
            experience = filledExp;
          }
          return experience;
        });
        return {
          eEdata,
        };
      });
    }

    //when adding a new experience
    else {
      filledExp.id = uniqid();
      this.setState((prevState) => ({
        eEdata: prevState.eEdata.concat(filledExp),
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
      company: this.state.pEcompany,
      position: this.state.pEposition,
      tasks: this.state.pEtasks,
      dateStart: this.state.pEdateStart,
      dateFinish: this.state.pEdateFinish,
    };
    //when editing an experience
    if (this.state.pEid) {
      filledExp.id = this.state.pEid;
      this.setState((prevState) => {
        const pEdata = prevState.pEdata.map((experience) => {
          if (experience.id === prevState.pEid) {
            experience = filledExp;
          }
          return experience;
        });
        return {
          pEdata,
        };
      });
    }

    //when adding a new experience
    else {
      filledExp.id = uniqid();
      this.setState((prevState) => ({
        pEdata: prevState.pEdata.concat(filledExp),
      }));
    }
    this.setState({
      pEid: "",
      pEcompany: "",
      pEposition: "",
      pEtasks: "",
      pEdateStart: "",
      pEdateFinish: "",
    });
  }
  handleEditExperience(args, event) {
    event.preventDefault();
    const [id, component] = args;
    let exp = "";
    if (component === "education") {
      exp = this.state.eEdata.find((exp) => exp.id === id);
      this.setState({
        eEid: exp.id,
        eEschoolName: exp.schoolName,
        eEtitle: exp.title,
        eEdateFinish: exp.dateFinish,
      });
    }
    //when editing practical experience (component="practical")
    else {
      exp = this.state.pEdata.find((exp) => exp.id === id);
      this.setState({
        pEid: exp.id,
        pEcompany: exp.company,
        pEposition: exp.position,
        pEtasks: exp.tasks,
        pEdateStart: exp.dateStart,
        pEdateFinish: exp.dateFinish,
      });
    }
  }
  handleDeleteExperience(args, event) {
    event.preventDefault();
    const [id, component] = args;
    component === "education"
      ? this.setState((prevState) => ({
          eEdata: prevState.eEdata.filter((experience) => experience.id !== id),
        }))
      : //when deleting practical experience (component="practical")
        this.setState((prevState) => ({
          pEdata: prevState.pEdata.filter((experience) => experience.id !== id),
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
