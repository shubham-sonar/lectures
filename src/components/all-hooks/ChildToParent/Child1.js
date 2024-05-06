import React, { useState } from "react";

const Child1 = ({ callback }) => {
  const [state, setState] = useState("");

  const setData = (e) => {
    e.preventDefault();
    callback(state);
  };

  return (
    <>
      <h3>Child1</h3>
      <form onSubmit={setData}>
        <input
          value={state}
          onChange={(e) => setState(e.target.value)}
          name="sendValue"
        />
        <button type="submit"> Submit Data </button>
      </form>
    </>
  );
};

export default Child1;
