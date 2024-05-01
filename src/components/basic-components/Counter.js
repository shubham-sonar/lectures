import React, { useState } from "react";

function Counter() {
  // ? Inside Class based component

  //   constructor(){
  //     super();
  //     this.state = {
  //       count: 0
  //     }
  //   }

  // eventHandler(){
  //   setState({count : this.state.count + 1})
  // }

  // ? Inside Functional component

  // Initialize a state variable 'count' with a default value of 0
  // setCount is the function used to update the value of 'count'
  const [count, setCount] = useState(0);

  // let count = 0;
  // Function to handle the click event on the button
  function handleClick() {
    // Update the state to increment the current count
    // At this moment my actual count is not changed because the state change is always asynchronous
    setCount(count + 1);
    // count = count + 1;

    // When my screen shows 1 why this console log shows 0
    // Reason - state change is asynchronous and therefore this synchronous line will execute first then once this handler function runs completely only then the state change will occur.
    console.log(count);
  }

  return (
    <>
      <p> Click on the button to increase the count:</p>
      {/* Button with an onClick event handler calling the handleClick function */}
      {/* If my console log shows 0 why the hell I get 1 here */}
      <button onClick={handleClick} style={{ fontSize: "20px" }}>
        Click me! Count is: {count}
      </button>
    </>
  );
}

export default Counter;
