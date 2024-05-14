import React, { useEffect, useRef, useState } from 'react';

const FocusInput = () => {
    // Create a ref to hold the reference to the input element
    const inputRef = useRef(null);

    /*
     `useEffect` Hook:
     - Runs after the component mounts.
     - Focuses the input element using the ref.
     - Empty dependency array ensures this effect runs only once, similar to componentDidMount.
    */
    
     useEffect(() => {
        inputRef.current.focus(); // Focus the input element
        inputRef.current.value = "Shubham" // Setting the default value
        // console.log(inputRef.current.value); // useRef() variable updates are synchronous
    }, []); // Empty dependency array ensures this effect runs only once

    /*
     - Displays a paragraph and an input field.
     - The input field is associated with the `inputRef` to be directly accessed by the `useRef` hook.
    */
    
     return (
        <div>
            <p> This is the first example of useRef() Hook </p> {/* Descriptive text */}
            <input type='text' ref={inputRef} text='text' /> {/* Input element with ref */}
        </div>
    );
}

export default FocusInput;

/*
? useRe` Hook:

? useRef() Hook:

? Interview ans - It is used to store the reference of the DOM elements and to create the persistant variables which can be changed without causing any rerenders. (Simply, it is a middle way of using the best of State variables and Normal variables.)

* - The `useRef` hook is used to persist a mutable value across re-renders without causing a re-render when the value changes.
* - It holds a reference to a DOM node or any mutable value. The reference persists throughout the component's lifecycle.
* - This hook returns a mutable ref object which has a `.current` property. This property is initialized to the passed argument (or `null` if no argument is provided).

? How `useRef` Works:

* - `useRef` creates a reference object (`inputRef`) initialized to `null`.
* - The `ref` attribute on the input element is assigned to `inputRef`. This binds the input element to the `inputRef`.
* - When the component mounts, `inputRef.current` refers to the input element.
* - We can manipulate the input element directly via `inputRef.current`. For example, `inputRef.current.focus()` focuses the input.

? Advantages of useRef:

* - Does not cause re-renders when the `.current` property changes, unlike state changes.
* - Useful for accessing and interacting with DOM elements directly, such as focusing, scrolling, or other imperative actions.
* - Helps manage focus, text selection, triggering animations, and integrating with third-party libraries.

- In above example useRef is used to focus the input element automatically when the component mounts, providing a better user experience by readying the input field for immediate user interaction.

? imp interviewer definitions:

* - `useRef` is used for directly interacting with DOM elements without causing unnecessary re-renders.

- Here In the `FocusInput` component, it is used to automatically focus an input field.

*/

