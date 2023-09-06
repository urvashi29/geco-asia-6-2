import React from "react";

const Display = ({ data }) => {
  return (
    <div>
      My name is {data.firstName}, age is {data.age}, working as a {data.designation}.
    </div>
  );
};

export default Display;
