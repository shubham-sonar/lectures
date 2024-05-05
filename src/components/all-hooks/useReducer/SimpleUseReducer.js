/*
! useReducer in React:
? useReducer is a hook that is typically used for managing state in React applications where the state logic is complex or involves multiple sub-values. It's an alternative to useState, providing more precise state transitions and handling complex state logic cleanly.

* Why useReducer?
* - Provides a more predictable state management system by relying on actions to dictate state changes.
* - Makes complex state logic more organized by centralizing the logic in a reducer function.
* - Easier to integrate with other advanced state management patterns, like context or middleware.

*/

import React, { useReducer } from 'react';

// Initial state of the counter
const initialState = 0;

// Reducer function that defines how state transitions occur based on actions
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;  // Increment the state by 1
        case 'decrement':
            return state - 1;  // Decrement the state by 1
        case 'reset':
            return initialState;  // Reset state to the initial value
        default:
            return state;  // Return current state for any unknown action
    }
    // Whatever you return from the reducer function it will be considered as the new state/
    // Therefore we can see the returned state as setState() function we use in the useState hook.
}

function SimpleUseReducer() {
    // useReducer hook to manage state with the reducer function
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h2>SimpleUseReducer</h2>
            <h3>Counter value: {count}</h3>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
    );
}

export default SimpleUseReducer;

/*
? imp points:
* - useReducer is particularly useful in scenarios where the next state depends on the previous one.
* - It helps in managing state transitions logically by defining a reducer function that specifies how the state should change in response to each action.
* - This approach can make debugging state changes easier as each action can be logged and state transitions are predictable based on those actions.
*/
