// This is just a simple counter using the useState hook.


import React, { useState } from 'react'

function HooksCounter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>HooksCounter</p>
            <button onClick={() => setCount(count + 1)}> Counter {count} </button>

        </div>
    )
}

export default HooksCounter


/*
 This is the unsafe way of changing the state of the counter because if we are incrementing it by 5 in one go then the counter will skip the last 4 increments and will only render it once.
 
 This is because the react optimises the rendering if the component changes the state in a fraction then the rerendering will skip many steps.

 Therefore if we need to change the state on the basis of the previous state then we must pass the function to the setState method returned by the useState hook.

 To see the example follow the next file named= HooksCounterTwo
*/