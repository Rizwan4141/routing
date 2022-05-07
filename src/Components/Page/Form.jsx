import React from "react";
import { useLocation } from "react-router-dom";

const Form = () => {
  const location = useLocation();
  console.log("form page", location.state.id, location.state.name);
  return (
    <div>
      <h1>form</h1>
      
    </div>
  );
};

export default Form;
