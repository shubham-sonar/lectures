import React, { useState } from "react";
import Child1 from "./Child1";

const Parent1 = () => {
  const [parentState, setParentState] = useState("");

  const getData = (receivedData) => {
    console.log(receivedData);
    setParentState(receivedData);
  };

  return (
    <>
      <h2>Parent1</h2>
      <h3> The info sent by the child is : {parentState}</h3>
      <Child1 callback={getData} />
    </>
  );
};

export default Parent1;
