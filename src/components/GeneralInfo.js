// GeneralInfo.js

import React from "react";

const GeneralInfo = (props) => {
const [name,email,phone]=props.name;

  return (
    <div>
      <h1>General Info</h1>
    <p>Name: {name}</p>  
    <p>Email: {email}</p>  
    <p>Phone: {phone}</p>  
    </div>
  );
};

export default GeneralInfo;