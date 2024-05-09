// 'https://jsonplaceholder.typicode.com/posts/1'

import axios from 'axios';
import React, { useEffect, useState } from 'react'

const MySimpleFetch = () => {

    const [post, setPost] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then((response)=>{
        setPost(response.data);
        setLoading(false);
    })
    .catch((error)=>{
        console.error("This is the error in the component : ", error)
        setError("There is some error while fetching...!")
        setLoading(false);
    })
},[])

  return (
    <div>
        <h3>MySimpleFetch</h3>
        <h5> {loading ? "Loading... Please Wait" : null } </h5>
        {
            error ? <h5> {error} </h5> : <h1> {post.title} </h1>
        }
    </div>
  )
}

export default MySimpleFetch
