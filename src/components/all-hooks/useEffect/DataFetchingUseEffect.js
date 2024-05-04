import axios from 'axios';
import React, { useEffect, useState } from 'react'

function DataFetchingUseEffect() {
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [idFromButton, setIdFromButton] = useState(1);

    const onClickHandler = () => {
        console.log('Click Handler Called');
        setIdFromButton(id);
    }

    useEffect(() => {
        console.log("UseEffect called");
        // axios(`https://jsonplaceholder.typicode.com/posts/`)
        axios(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
            .then(response => {
                setPost(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [idFromButton])


    return (
        <div>
            <p> DataFetchingUseEffect </p>
            <h4> Request the post using the post ID</h4>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
            <button type="button" onClick={onClickHandler}> Fetch Post </button>
            <h6> {post.title} </h6>
            {/* 
            <ul>
                {post.map((p) => <li key={p.id}> {p.title} </li>)}
            </ul> */}

        </div>
    )
}

export default DataFetchingUseEffect


/*

- Please note = Here we are changing the state variable of post from the useEffect therefore the component will rerender because of the useEffect function and therefore the useEffect will also re run after each render (as we know the rerendering triggers the useEffect) therefore it will create the infinite loop.
- That is why we specify the state variable in the array of useEffect.

*/