// This file shows how to change the state reliabaly when we need to use the previous state to set the new state. (passing the function as argument to setState)

import React, { useState } from "react";

function HooksCounterTwo() {
  const initialValue = 0;
  const [count, setCount] = useState(initialValue);

  console.log(count);

  const incrementFive = () => {
    for (let i = 1; i <= 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <div>
      <h3> HooksCounterTwo </h3>
      <h3> Counter Operations </h3>
      <h3> Counter : = {count} </h3>

      <button onClick={() => setCount(initialValue)}> Restart </button>
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevState) => prevState - 1)}>
        Decrement
      </button>
      <button onClick={incrementFive}> Increment by 5 </button>
    </div>
  );
}

export default HooksCounterTwo;
