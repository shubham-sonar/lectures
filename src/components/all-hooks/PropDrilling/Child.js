import React from "react";

const Child = ({ value }) => {
  return (
    <>
      <h3>Child</h3>
      <h4> My Grandparent is {value}</h4>
    </>
  );
};

export default Child;
