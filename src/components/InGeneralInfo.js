// InGeneralInfo.js

import React, { Component } from "react";

class InGeneralInfo extends Component {
  render() {
    return (
      <div>
        <h2>General Information</h2>
        <form>
          <label>
            Name
            <input type="text" id="name" name="name" value="Adrian" />
          </label>
          <label>
            Email
            <input
              type="email"
              id="email"
              name="email"
              value="adrianpevelandia@gmail.com"
            />
          </label>
          <label>
            Phone
            <input type="phone" id="phone" name="phone" value="0478776445" />
          </label>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default InGeneralInfo;
