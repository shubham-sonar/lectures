/*
! Caution when specifying dependencies for useEffect:

* The dependency array in useEffect should be thought of as a way to inform React about what to monitor for changes. 
* This means it's crucial to include all the state variables and props that the effect depends on. 
* If a variable used in the effect is not included in the dependency array, React will not re-run the effect when that variable changes, which can lead to bugs or unexpected behaviors.

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
        // console.log(count);

        // Second method
        setCount((prevCount) =>  prevCount + 1);
        console.log(count)
    }

    useEffect(() => {
        // function doSomething() {
        //     console.log(someProp);
        // }
        // doSomething()

        console.log('UseEffect called to initialise and start the counter ');
        setInterval(tick, 1000);
        // tick();
    }, [])

    // }, [count])

    // Enable above line for method one.

    // If we specify the empty array then the useEffect will consider that there is nothing to monitor for rerendering, not even the state variable count. Thus specify the count to monitor or use second method to change the state variable by passing the arrow function to setState method (here setCount). 
    // In first method of passing the count as dependency the console.log will be done for every second but only once in second method of passing the function to the setState method.



    return (
        <div>
            IncorrectDependency Example
            <h3> Timer : {count} </h3>
        </div>
    )
}

export default IncorrectDependency



/*
? imp notes:

- If the effect depends on variables that are likely to change, such as `count`, those should also be included in the dependency array.

- Alternatively, if an effect should run only once (like componentDidMount), an empty dependency array is used. However, any variable used inside the effect should either be static during the component's lifetime or handled through event handlers or other means that do not require dependency tracking.

- For complex scenarios where part of the effect should run on mount and part should update based on certain variables, consider using multiple useEffects with different dependencies.

- If we are calling some function from the useEffect method then the useEffect (with empty array) it will not be  monitoring the changes that are made to props/state in that function therefore rather than just calling a function from useEffect we must define that function inside the useEffect CBF itself. Eg function doSomething()

Here we may think if there is a code that we want to run ohnly once like the CDM and other piece of code as the CDU (means again and again) Then we can use multiple useEffects in a single component. 
*/


/*
? Guys read this for detailed explanation.


- original IncorrectDependency component, we have set up a timer that increments a count state every second. 
- The crucial parts to focus on are the setCount usage within the tick function and the dependency array of the useEffect hook.

* useState Initialization:
const [count, setCount] = useState(0);

- This initializes the count state with a value of 0.

* Tick Function:
const tick = () => {
    setCount(count + 1);
}

- This function is intended to increment the count state by 1 every time it's called.

* useEffect Hook:
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

- This effect is set to run only when someProp changes. Inside, it sets up an interval that calls tick every second.

? Issues when we  use only setCount(count +1) instead of a callback function setCount(prevstate=> prevstate +1)

- The problem arises due to how closures work in JavaScript combined with the dependencies of the useEffect hook:

- Closure: When wer useEffect runs, it captures the current value of count (which is 0) in the tick function. 
- This captured value doesn't update on subsequent renders because the tick function itself is not re-created (it's the same function being called repeatedly by setInterval).

- Dependency Array: Since someProp doesn't change and count is not included in the dependency array, React does not re-run the useEffect to update the tick function with the new count value. 
- Therefore, every call to tick uses the initial count value of 0, effectively trying to set the state to 1 repeatedly.

? Solution Using a Function with setCount

- When we modify the setCount call to use a function:
setCount(prevCount => prevCount + 1);

- we are now using a functional update. Here’s why this resolves the issue:

* Functional Update: By using a function inside setCount, we are telling React to apply this update based on the previous state, not based on the count value captured in the closure. 
* This means each call to setCount always correctly increments the latest state value, regardless of what the count value was when the useEffect or tick was defined.

*/



/*
! Different versions of working code

- This one is working because the setTimeout will execute every 1 second once state is updated.

    const tick = () => {
        setCount(count + 1);
        console.log(count)
    }

    useEffect(() => {   
        setTimeout(tick, 1000);
    }, [count])


    - This onc because the setInterval will run the tick function every second the state changes therefore the tick function gets the new value for count when its changed and useEffect is run again, 
    
        const tick = () => {
            setCount(count + 1);
            console.log(count)
        }
    
        useEffect(() => {   
            setInterva;(tick, 1000);
        }, [count])
    
    
    - This will also do the same but now the tick function will not execute agian and rather depend  on the callback and the current state value available in the setState function.
    - But if we see carefully we can notice that the console.log will print the count = 0 all the time

        const tick = () => {
            setCount(prevCount => prevCount + 1);
            console.log(count)
        }
    
        useEffect(() => {   
            setInterva;(tick, 1000);
        }, [])
*/