/*

! What is useEffect?

? useEffect is a Hook in React that allows us to perform side effects in functional components.
? It serves as a replacement for the lifecycle methods componentDidMount, componentDidUpdate,
? and componentWillUnmount when using class components.

* How does useEffect work?

- useEffect accepts a function and an optional dependency array. The function defines the side effect to run,
 and the dependency array specifies when the side effect should rerun.

* - If the dependency array is empty, the side effect runs once after the initial render (like componentDidMount).
* - If the dependency array has values, the side effect runs after the initial render and whenever any dependency value changes (like componentDidUpdate).
* - If no dependency array is provided, the side effect runs after every render (like both componentDidMount and componentDidUpdate).
* - Returning a function from useEffect specifies cleanup logic (like componentWillUnmount).

* Example :
* useEffect is used to update the document title every time the 'count' state changes.

? Syntax.

useEffect( sideEffectFunction , dependencyArray)

function sideEffectFuntion(){
    do some tasks here
}

const dependencyArray = [ stateVariable1, stateVariable2, stateVariableN ]

*/

import React, { useState, useEffect } from "react";

function UseEffectCounter() {
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  // useEffect hook to update the document title based on the count
  useEffect(() => {
    document.title = `Clicked ${count} times`;
    console.log("useEffect for count one is running...", count);
  }, [count]); // Dependency array: Effect reruns when 'count' changes

  // console.log("useEffect is running...", count)

  //? We can write multiple useEffectes in the same component also but the dependencies may vary.

  useEffect(() => {
    console.log("useEffect for count Two is running...", countTwo);
  }, [countTwo]); // Dependency array: Effect reruns when 'count two' changes

  return (
    <div>
      <h3>UseEffectCounter one: {count}</h3>
      <button onClick={() => setCount(count + 1)}>+1</button>

      <h3>UseEffectCounter two: {countTwo}</h3>
      <button onClick={() => setCountTwo(countTwo + 1)}>+1</button>
    </div>
  );
}

export default UseEffectCounter;

/*
Thsi line below shows a wrong implementation that tries to update the document title without useEffect:

    console.log("useEffect is running...", count)

This approach is flawed in React functional components because it executes on every render, not just when 'count' changes, potentially leading to performance issues.
*/
