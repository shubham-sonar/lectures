import React from 'react';

// Component demonstrating inline styling
// Instead of using the Kabab-cases-style we use camelCaseStyle

const InlineStylingComponent = () => {
  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };

  return (
    <>
      <h1 style={myStyle}>Hello Style!</h1>
      <p style={{ padding: "20px", backgroundColor: "lightgray" }}>Add a little style!</p>
    </>
  );
};

export default InlineStylingComponent;
