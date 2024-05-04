/*
! Understanding useEffect as componentWillUnmount

? The componentWillUnmount lifecycle method is used in class components to perform necessary cleanup (e.g., removing event listeners or canceling network requests) to prevent memory leaks.

? In functional components, we simulate this with a cleanup function returned from useEffect.

? How does the cleanup function work?
- When a component unmounts or before the dependencies of an effect change, the cleanup function is called. 
- This behavior ensures that any side effects established by useEffect are appropriately cleaned up.

*Eg --
- below wee use a child component (CDMuseEffect) that sets up an event listener. 

- The parent component (CWUuseEffect) controls the mounting and unmounting of this child component using a state-driven conditional rendering.
*/

import React, { useState } from 'react';
import CDMuseEffect from './CDMuseEffect';

function CWUuseEffect() {
    const [display, setDisplay] = useState(true);  // State to control the display of the child component

    return (
        <div>
            <p>CWUuseEffect</p>
            <h4>Mouse pointer location will be visible only if Display is on</h4>
            <h6>Use the button to toggle the display</h6>

            {/* Button to toggle the visibility of the child component */}
            <button onClick={() => setDisplay(!display)}>Toggle Display</button>

            {/* Conditionally render the CDMuseEffect component based on 'display' state */}
            {display && <CDMuseEffect />}
        </div>
    );
}

export default CWUuseEffect;

/*
? Imp:
* - The 'display' state controls whether the CDMuseEffect component is mounted.

* - When the 'display' state is false, the CDMuseEffect component unmounts, triggering its cleanup function.

* - The cleanup function in CDMuseEffect handles the necessary tasks like removing event listeners which mimic componentWillUnmount behavior.

* - The conditional rendering on line 2 ensures the component is only rendered and therefore active when 'display' is true.

* - Each time the state 'display' changes, React reevaluates the JSX in the return statement, which is similar to how the render method works in class components. This reevaluation decides whether to mount or unmount the CDMuseEffect component.

*/
