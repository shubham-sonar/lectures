/*

? Why Use `useReducer` Over `useState`?
* - `useReducer` is preferred when the state management logic becomes complex, involving multiple transitions.
* - It's especially useful when state transitions depend on specific actions, like in this example (fetching data successfully or encountering an error).

? Hooks & Components I have used:
* - `useReducer`: Manages the component state and controls transitions between loading, success, and error states.
* - `useEffect`: Triggers the data-fetching side effect on component mount, dispatching state updates based on the result.

*/

import React, { useReducer, useEffect } from 'react'; // Importing React, hooks
import axios from 'axios'; // HTTP client for API requests

// Initial state object representing the shape of state variables
const initialState = {
    post: {}, // Stores the fetched posts data
    error: '', // Holds error messages, if any
    loading: true // Indicates whether data is being fetched
};


/*
? Reducer function to handle state transitions based on action types.
* - `SUCCESS`: Updates the state with the fetched posts data.
* - `ERROR`: Updates the state to show an error message.
* - Default returns the current state for any unknown action types.
*/

const reducer = (state, action) => {
    switch (action.type) {
        case 'SUCCESS':
            return {
                post: action.payload, // Set the fetched data
                error: '', // Clear any existing error messages
                loading: false // Stop loading
            };
        case 'ERROR':
            return {
                post: {}, // Clear any existing posts data
                error: 'Something Went Wrong', // Set the error message
                loading: false // Stop loading
            };
        default:
            return state; // Return the unchanged state for unknown action types
    }
};

function ComplexFetch() {
    // Using `useReducer` for managing state
    const [state, dispatch] = useReducer(reducer, initialState);

    // Function to map over and display fetched post titles
    const display = () => {
        return state.post.map((data) => (
            <li key={data.id}> {data.title} </li>
        ));
    };
    // Conditionally prepare the list for rendering if loading has completed
    const dataList = !state.loading && display();

    /*
    ? useEffect Hook:
    * - Makes an API request on the component's initial render to fetch all posts.
    * - Dispatches a success or error action based on the result.
    */
    
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                dispatch({ type: 'SUCCESS', payload: res.data }); // Pass data to the reducer
                console.log(res.data); // Optional console log for debugging
            })
            .catch((e) => {
                dispatch({ type: 'ERROR' }); // Handle errors by dispatching an error action
            });
    }, []); // Empty dependency array to run only on the first render (componentDidMount equivalent)

    /*
     Rendering Logic:
    * - Conditionally renders the posts list if data is loaded.
    * - Otherwise, displays loading or error messages based on the current state.
    */
    
     return (
        <div>ComplexFetch
            {state.loading ? 'Loading...' : <ul>{dataList}</ul>} {/* Display posts or 'Loading...' */}
            {state.error ? state.error : null} {/* Show error if present */}
        </div>
    );
}

export default ComplexFetch;

/*
? Imp:
* - `useReducer` provides better organization and maintainability for more complex state transitions.
* - Error and loading states are clearly separated for a more predictable user experience.
* - `axios` handles data fetching cleanly, and results can be easily passed to the reducer for state management.
*/
