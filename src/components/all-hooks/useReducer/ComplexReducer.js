/*
! Complex State Management with useReducer:

? useReducer is a React hook that is ideal for managing complex state logic that involves multiple sub-values or when the next state depends on the previous one. It is similar to Redux's reducer for local state management.

? Why use useReducer for complex states?

* - It helps in maintaining clean and manageable state transition logic by centralizing the decisions in one place.
* - It simplifies the component logic by abstracting the state handling outside of the component.
* - Actions sent to the reducer function define clear and predictable state modifications.

*/

import React, { useReducer } from 'react';

// Initial state with two separate counters
const initialState = {
    firstCounter: 0,
    secondCounter: 0
};

// const State = {
//     firstCounter: 1,
//     secondCounter: -1
// };

// Reducer function to handle state transitions based on action types
const reducer = (state, action) => {
    switch (action.operation) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + 1 };
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - 1 };
        case 'incrementSecond':
            return { ...state, secondCounter: state.secondCounter + 1 };
        case 'decrementSecond':
            return { ...state, secondCounter: state.secondCounter - 1 };
        case 'reset':
            return initialState; // Resets both counters to initial state
        default:
            return state;
    }
};

function ComplexReducer() {
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h2>ComplexReducer</h2>
            <h3>First Counter value: {count.firstCounter}</h3>
            <button onClick={() => dispatch({ operation: 'increment' })}>Increment First Counter</button>
            <button onClick={() => dispatch({ operation: 'decrement' })}>Decrement First Counter</button>

            <h3>Second Counter value: {count.secondCounter}</h3>
            <button onClick={() => dispatch({ operation: 'incrementSecond' })}>Increment Second Counter</button>
            <button onClick={() => dispatch({ operation: 'decrementSecond' })}>Decrement Second Counter</button>
            <br />
            <button onClick={() => dispatch({ operation: 'reset' })}>Reset Both Counters</button>
        </div>
    );
}

export default ComplexReducer;

/*
? imp Points:
* - The reducer function handles actions with types specified to manipulate either the first or the second counter.
* - By using a single reducer for multiple pieces of state, we can maintain cohesion and reduce redundancy in state management.
* - This pattern is extremely beneficial when dealing with multiple pieces of state that may have interdependent updates or need to be reset simultaneously.
*/
 