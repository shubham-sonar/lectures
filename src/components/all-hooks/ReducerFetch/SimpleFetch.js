/*

! Hooks that I have used:

? - `useState`: Manages three pieces of state:
*     1. `loading` (Boolean): Indicates whether the data is being fetched.
*     2. `post` (Object): Holds the fetched post's data.
*     3. `error` (String): Stores an error message if the fetch fails.

?- `useEffect`: Performs the data fetching operation on the component's initial render using the specified API endpoint and updates the state based on the response or error.


? Why I use `axios` for Data Fetching?

* - `axios` is a popular HTTP client library providing powerful features like interceptors and request cancellation.
* - It simplifies making GET, POST, and other HTTP requests.

*/

import React, { useState, useEffect } from 'react'; // Importing React and necessary hooks
import axios from 'axios'; // Importing `axios` for HTTP requests

function SimpleFetch() {
    // State variables:
    const [loading, setLoading] = useState(true); // Keeps track of the loading status
    const [post, setPost] = useState({}); // Stores the fetched post data
    const [error, setError] = useState(''); // Holds error messages

    /*
    * useEffect Hook:
    * - Triggers an API request on component mount to fetch the post.
    * - An empty dependency array is provided to execute this side effect only once.
    * - Updates the `loading`, `post`, and `error` states based on the request's success or failure.
    */
    useEffect(() => {
        // Making a GET request to fetch a specific post
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then((res) => {
                // If the request is successful, store the post data
                setLoading(false); // Stop loading
                setPost(res.data); // Store the response data in `post`
                setError(''); // Clear any existing error messages
            })
            .catch((e) => {
                // Handle any error that occurs during the request
                setLoading(false); // Stop loading
                setPost({}); // Clear post data
                setError('Something went wrong'); // Set an error message
            });
    }, []); // Empty array to ensure the request only runs once (similar to componentDidMount)

    /*
    ? Rendering Logic:
    * - If data is still loading, display a loading message.
    * - If an error is present, display the error message.
    * - Otherwise, display the post's title.
    */
    return (
        <div>SimpleFetch
            {/* Conditional rendering based on the loading and error state */}
            {loading ? 'Loading...' : post.title}
            {error ? error : null}
        </div>
    );
}

export default SimpleFetch;

/*
Imp :
* - `axios.get` is used to make a GET request to fetch data from an external API.
* - `useState` is crucial for managing the component's internal state.
* - `useEffect` helps run the data fetching code only once when the component is first rendered.
*/
