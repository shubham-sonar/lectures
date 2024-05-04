/*
! Caution when specifying dependencies for useEffect:
* The dependency array in useEffect should be thought of as a way to inform React about what to monitor for changes. This means it's crucial to include all the state variables and props that the effect depends on. If a variable used in the effect is not included in the dependency array, React will not re-run the effect when that variable changes, which can lead to bugs or unexpected behaviors.

? Common Mistakes:
* - Excluding variables that affect the operation of the effect.
* - Incorrect assumptions about how dependencies control the effect execution.
* - Overlooking the closure behavior in JavaScript where callbacks capture the values at the time of their creation unless they are re-created.

? Key Principle:
* Always synchronize the effect with its dependencies. If the effect uses any variable that can change over time and is used within the effect, it must be listed in the dependency array.

*/

import React, { useState, useEffect } from 'react'

function IncorrectDependency() {
    const [count, setCount] = useState(0);
    const someProp = 0;

    const tick = () => {
        // First method
        // setCount(count + 1);

        // Second method
        setCount((prevCount) => prevCount + 1);
    }

    useEffect(() => {
        function doSomething() {
            console.log(someProp);
        }
        doSomething()

        console.log('UseEffect called to initialise and start the counter ');
        const interval = setInterval(tick, 1000);
        return () => {
            clearInterval(interval);
        }
    }, [someProp])

    // }, [count])

    // Enable above line for method one.

    // If we specify the empty array then the useEffect will consider that there is nothing to monitor for rerendering, not even the state variable count. Thus specify the count to monitor or use second method to change the state variable by passing the arrow function to setState method (here setCount). 
    // In first method of passing the count as dependency the console.log will be done for every second but in second method of passing the function to the setState method.



    return (
        <div>
            IncorrectDependency Example
            <h3> Timer : {count} </h3>
        </div>
    )
}

export default IncorrectDependency



/*
Note - If we are calling some function from the useEffect method then the useEffect (with empty array) it will not be  monitoring the changes that are made to props/state in that function therefore rather than just calling a function from useEffect we must define that function inside the useEffect CBF itself. Eg function doSomething()

Here we may think if there is a code that we want to run ohnly once like the CDM and other piece of code as the CDU (means again and again) Then we can use multiple useEffects in a single component. 
*/




















/*
! Caution when specifying dependencies for useEffect:
* The dependency array in useEffect should be thought of as a way to inform React about what to monitor for changes. This means it's crucial to include all the state variables and props that the effect depends on. If a variable used in the effect is not included in the dependency array, React will not re-run the effect when that variable changes, which can lead to bugs or unexpected behaviors.

* Common Mistakes:
* - Excluding variables that affect the operation of the effect.
* - Incorrect assumptions about how dependencies control the effect execution.
* - Overlooking the closure behavior in JavaScript where callbacks capture the values at the time of their creation unless they are re-created.

* Key Principle:
* Always synchronize the effect with its dependencies. If the effect uses any variable that can change over time and is used within the effect, it must be listed in the dependency array.
*/

// import React, { useState, useEffect } from 'react';

// function IncorrectDependency() {
//     const [count, setCount] = useState(0);
//     const someProp = 0;  // Static value, used as a dependency

//     // Function to increment the count
//     const tick = () => {
//         // This function uses a callback with the previous state to correctly increment the count
//         setCount(prevCount => prevCount + 1);
//     };

//     useEffect(() => {
//         // Function defined within useEffect to use the captured `someProp` value
//         function doSomething() {
//             console.log(someProp);  // This logs the value of `someProp`
//         }
//         doSomething();

//         console.log('UseEffect called to initialise and start the counter');
//         const interval = setInterval(tick, 1000);  // Set up an interval to run `tick` every second

//         // Cleanup function to clear the interval when the component unmounts or dependencies change
//         return () => {
//             console.log('Cleanup called');
//             clearInterval(interval);
//         };
//     }, [someProp]);  // Dependency array includes `someProp`

//     // Note: The above effect will only re-run if `someProp` changes, not `count`.

//     return (
//         <div>
//             IncorrectDependency Example
//             <h3>Timer: {count}</h3>
//         </div>
//     );
// }

// export default IncorrectDependency;

/*
Additional Notes:
- If the effect depends on variables that are likely to change, such as `count`, those should also be included in the dependency array.
- Alternatively, if an effect should run only once (like componentDidMount), an empty dependency array is used. However, any variable used inside the effect should either be static during the component's lifetime or handled through event handlers or other means that do not require dependency tracking.
- For complex scenarios where part of the effect should run on mount and part should update based on certain variables, consider using multiple useEffects with different dependencies.
*/
