/*
! What is Conditional Execution in useEffect?

? useEffect allows for conditional execution of side effects in functional components by using a dependency array.
? The side effect only reruns when one of the dependencies in this array changes.

* In our example the document title is updated only when the 'count' state changes, despite other state changes (like 'name').
* This selective execution prevents unnecessary operations which can optimize performance and avoid side effects running out of desired conditions.


* If the dependency array were omitted, the side effect would execute after every render, which might lead to performance issues if the side effect is heavy.

* If the dependency array is empty, the effect runs exactly once (similar to componentDidMount in class components).
*/

import React, { useState, useEffect } from 'react';

function ConditionalUseEffect() {
    const [count, setCount] = useState(0); // State for counting clicks
    const [name, setName] = useState(''); // State for storing the user input

    // useEffect that depends on the 'count' state
    useEffect(() => {
        console.log('UseEffect is updating the document title because count changed.');
        document.title = `Counter value is ${count}`;
    }, [count]); // Dependency array includes only 'count'

    console.log('The component rerenders, but useEffect will run only if count changes.');

    return (
        <div>
            <h5>ConditionalUseEffect</h5>
            <input 
                type="text" 
                value={name} 
                onChange={(e) => {
                    setName(e.target.value);
                    e.preventDefault(); // Prevent default to handle cases like form submission if wrapped by <form>
                }}
            />
            <button onClick={() => setCount(count + 1)}>
                Counter: {count}
            </button>
        </div>
    );
}

export default ConditionalUseEffect;

/*
* Imp please note:

 - The useEffect hook is designed to run side effects not directly related to the rendering logic.
 - The dependency array is crucial for optimizing when these effects are triggered.
 - Always ensure that all variables used inside useEffect that might change over time are included in the dependency array to avoid stale closures and bugs.
*/
