/*
! Multiple useReducer Hooks:

? useReducer is a React hook that is useful for managing state in a more predictable and structured way. It's especially handy when the state logic becomes complex. When multiple states operate under similar logic but independently, we can use multiple `useReducer` hooks with the same reducer function.

? Advantages of Multiple useReducer Hooks:

* - Maintains clean and modular code by reusing the reducer for similar state operations.
* - Facilitates the management of different state variables that need similar actions but should not affect each other directly.
* - Enhances component readability and maintainability by segregating state management clearly.

*/

import React, { useReducer } from 'react';

// Initial state defining a single counter
const initialState = {
    Counter: 0,
};

// Reducer function to handle state changes based on dispatched actions
const reducer = (state, action) => {
    console.log(state)
    switch (action.operation) {
        case 'increment':
            return { Counter: state.Counter + 1 };  // Increment the counter
        case 'decrement':
            return { Counter: state.Counter - 1 };  // Decrement the counter
        case 'reset':
            return initialState;  // Reset the counter to initial state
        default:
            return state;  // Handle unknown actions by returning current state
    }
};

function MultipleUseReducer() {
    // Two independent useReducer hooks managing similar state structures
    const [count, dispatch] = useReducer(reducer, initialState);

    const [countSecond, dispatchSecond] = useReducer(reducer, initialState);

    return (
        <div>
            <h2>MultipleUseReducer</h2>
            <h3>First Counter value: {count.Counter}</h3>
            <button onClick={() => dispatch({ operation: 'increment' })}>Increment First Counter</button>
            <button onClick={() => dispatch({ operation: 'decrement' })}>Decrement First Counter</button>
            <button onClick={() => dispatch({ operation: 'reset' })}>Reset First Counter</button>
            <br />
            <h3>Second Counter value: {countSecond.Counter}</h3>
            <button onClick={() => dispatchSecond({ operation: 'increment' })}>Increment Second Counter</button>
            <button onClick={() => dispatchSecond({ operation: 'decrement' })}>Decrement Second Counter</button>
            <button onClick={() => dispatchSecond({ operation: 'reset' })}>Reset Second Counter</button>
        </div>
    );
}

export default MultipleUseReducer;

/*
? imp points:
* - Each `useReducer` hook operates independently, allowing multiple components or state pieces to utilize the same state logic without interference.
* - This setup is particularly useful when dealing with components that require multiple instances of similar state logic, such as multiple counters, forms, or complex nested states.
* - The approach helps keep the state management logic DRY (Don't Repeat Yourself) by reusing the reducer across multiple states.
*/
