// Passing the array to the useState method. and then manupulating it.

import React, { useState } from 'react'

function ArrayToUsestate() {
    const [items, setItems] = useState([])

    const addItem = () => {
        setItems([
            ...items, 
            {
                id: items.length,
                value: Math.floor(Math.random() * 100 + 1)
            }
        ])
    }

    return (
        <div>
            <h3>ArrayToUsestate</h3>
            <button onClick={addItem}> Add Random number to list </button>
            <h3> List items </h3>
            <ul>
                {
                    items.map((item) => {
                        return <li key={item.id}> {item.value} </li>
                    })
                }
            </ul>
        </div>
    )
}


/*
With waring because we are using the index as the key for the list item


function ArrayToUsestate() {
    const [items, setItems] = useState([])

    const addItem = () => {
        setItems([
            ...items,  Math.floor(Math.random() * 100 + 1)
        ])
    }

    return (
        <div>
            <h3>ArrayToUsestate</h3>
            <button onClick={addItem}> Add Random number to list </button>
            <h3> List items </h3>
            <ul>
                {
                    items.map((item, index) => {
                        return <li key={index}> {item} </li>
                    })
                }
            </ul>
        </div>
    )
}

*/
export default ArrayToUsestate