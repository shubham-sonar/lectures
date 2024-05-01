import React, { useState } from 'react';

function Events() {
  // State hook for managing input field state
  const [inputValue, setInputValue] = useState('Something');

  // Event handler for handling changes to the input field
  const handleInputChange = (event, greeting) => {
    // Accessing the event's value using event.target.value
    setInputValue(event.target.value);
    console.log(greeting + event.target.value);
  };

  // Event handler for handling form submission
  const handleSubmit = (event) => {
    // Preventing the default form submit action which refreshes the page
    event.preventDefault();
    alert(`A name was submitted: ${inputValue}`);
    // Clear the input after submission for convenience
    setInputValue('');
  };

  // Event handler for mouse over
  const handleMouseOver = () => {
    console.log("Mouse is over the submit button!");
  };

  // Event handler for focusing on an element
  const handleFocus = () => {
    console.log("Input field is focused!");
  };

  // Event handler for losing focus (blurring) an element
  const handleBlur = () => {
    console.log("Input field lost focus!");
  };

  // Render the component
  return (
    <form onSubmit= {handleSubmit} >
      <label>
        Name:
        <input 
          type="text" 
          value={inputValue} 
          onChange={(event)=> handleInputChange(event, "Hello"
          )}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </label>
      <button 
        type="submit"
        onMouseOver={handleMouseOver}
      >
        Submit
      </button>
    </form>
  );
}

export default Events;


/*
- Handling events in React is similar to handling events on DOM elements, but there are some syntax differences and specific behaviors you need to be aware of. 

? Interview = What are react events ?
- React events are synthetic events which are essential a wrapper around the native browser events.

- React encapsulates the browser's native event system into a synthetic event system that ensures events behave consistently across all browsers. 

- This also means that React events are objects managed by React's event system, which can improve performance and cross-browser compatibility.

? Event Handlers:

- handleInputChange: This function is triggered on every keystroke to update the component's state with the value currently in the input.

- handleSubmit: This function is called when the form is submitted. It prevents the default browser form submission behavior (which reloads the page) using event.preventDefault(), and then it can handle the submission logic, like sending data to a server or processing it within the app.

- handleMouseOver: Triggered when the mouse pointer goes over the submit button, used for logging or triggering UI changes.

- handleFocus and handleBlur: These functions are used to handle focus and blur events, which are important for accessibility and form validations.


- Rendering Form Elements with Event Handlers:

The input element is rendered with onChange, onFocus, and onBlur event handlers that update state and log status.

The button element uses onMouseOver to demonstrate how mouse events can be handled.

Synthetic Events: React wraps the browser's native event into synthetic events which unify the event handling across all browsers.

This means you can write your event handling code once and expect it to behave the same way in different environments.
*/