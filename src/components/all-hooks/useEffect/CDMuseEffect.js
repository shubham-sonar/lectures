/*
! What is the purpose of using useEffect as componentDidMount?

? By passing an empty dependency array to useEffect, we can mimic the behavior of the componentDidMount lifecycle method in class components.
? This means the effect runs once after the initial component mount and not on subsequent renders.

? How does it work as componentWillUnmount?
* The function returned from useEffect is called the cleanup function. It behaves like componentWillUnmount, where it runs before the component is removed from the UI to perform any necessary cleanup, such as removing event listeners or cancelling subscriptions.

* In our example, useEffect is used to set up and tear down a mousemove event listener, shows how to handle side effects that require cleanup.
*/

import React, { useState, useEffect } from 'react';

function CDMuseEffect() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    // Function to update state with the latest mouse position
    const logMousePosition = e => {
        console.log("Mouse listener called");
        setX(e.clientX);
        setY(e.clientY);
    };

    // useEffect to add and remove the mousemove event listener 
    // This useEffect will act like a componentDidMount

    useEffect(() => {
        console.log('Component did mount - useEffect called');
        window.addEventListener('mousemove', logMousePosition);

       // Cleanup function to remove the event listener

       // This useEffect part will act like a componentWillUnmount
        return () => {
            console.log('Component will unmount - Cleanup function called');
            window.removeEventListener('mousemove', logMousePosition);
        };
    }, []);  // Empty dependency array makes this effect run only once

    return (
        <div>
            <p>CDMuseEffect</p>
            <h3>Mouse Pointer Position = X: {x} & Y: {y}</h3>
        </div>
    );
}

export default CDMuseEffect;

/*
* Imp Please rememmber:
* - useEffect with an empty dependency array is used when we want the effect to run exactly once.
* - The cleanup function is crucial for preventing memory leaks, especially when dealing with global objects like window.
* - This pattern is particularly useful for event listeners, subscriptions, or any operations that should only be initialized once and cleaned up exactly once.
*/
