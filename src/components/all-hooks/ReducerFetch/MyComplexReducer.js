// 'https://jsonplaceholder.typicode.com/posts/1'

import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react'

const inititalState = {
    post: "",
    error: "",
    loading: true
}

// {
//     t: success
//     d: somedata
// }

const myReducer = (state, action)=>{
    switch(action.t){
        case "SUCCESS":
            return {
                post: action.d.title,
                error: '',
                loading: false
            };
        case "ERROR":
            return {
                post: "",
                error: "Something went wrong....!",
                loading: false
            };
        default: 
            return state;
    }
}

const MyComplexReducer = () => {

    const [posts, dispatchPosts] = useReducer(myReducer, inititalState);

    // const [post, setPost] = useState({});
    // const [error, setError] = useState("");
    // const [loading, setLoading] = useState(true);

useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then((response)=>{
        // setPost(response.data);
        // setLoading(false);
        dispatchPosts({ t : "SUCCESS", d: response.data});
    })
    .catch((error)=>{
        console.error("This is the error in the component : ", error)
        // setError("There is some error while fetching...!")
        // setLoading(false);
        dispatchPosts({ t : "ERROR" });

    })
},[])

  return (
    <div>
        <h3>MyComplexReducer</h3>
        <h5> {posts.loading ? "Loading... Please Wait" : null } </h5>
        {
            posts.error ? <h5> {posts.error} </h5> : <h1> {posts.post} </h1>
        }
    </div>
  )
}

export default MyComplexReducer
