// App.js

import React, { Component } from "react";
// import uniqid from "uniqid";
import CvInput from "./components/CvInput";
import CvOutput from "./components/CvOutput";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gIname: "",
      gIemail: "",
      gIphone: "",
      eEschoolName: "",
      eEtitle: "",
      eEdateFinish: "",
      pEcompany: "",
      pEposition: "",
      pEtasks: "",
      pEdateStart: "",
      pEdateFinish: "",
      gIdata: { name: "", email: "", phone: "" },
      pEdata: {
        company: "",
        position: "",
        tasks: "",
        dateStart: "",
        dateFinish: "",
      },
      // eEdata: { schoolName: "", title: "", dateFinish: "" },
      eEdata: [],
    };
    this.handleDataChange = this.handleDataChange.bind(this);
    this.handleGeneralInfoSubmit = this.handleGeneralInfoSubmit.bind(this);
    this.handleEducationExpSubmit = this.handleEducationExpSubmit.bind(this);
    this.handlePracticalExpSubmit = this.handlePracticalExpSubmit.bind(this);
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
    // this.setState({
    //   eEdata: {
    //     schoolName: this.state.eEschoolName,
    //     title: this.state.eEtitle,
    //     dateFinish: this.state.eEdateFinish,
    //   },
    // });
    this.setState({
      eEdata: this.state.eEdata.concat(filledExp),
    });
  }
  handlePracticalExpSubmit(event) {
    event.preventDefault();
    this.setState({
      pEdata: {
        company: this.state.pEcompany,
        position: this.state.pEposition,
        tasks: this.state.pEtasks,
        dateStart: this.state.pEdateStart,
        dateFinish: this.state.pEdateFinish,
      },
    });
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
        />
      </div>
    );
  }
}

export default App;
