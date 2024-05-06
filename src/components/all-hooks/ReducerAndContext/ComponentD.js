import React, { useContext } from 'react'
import { ReducerContext } from '../../../HooksApp'

function ComponentD() {
    const counterContext = useContext(ReducerContext);

    return (
        <div>ComponentD = count : {counterContext.countState}
            <button onClick={() => counterContext.countDispatch('increment')}> Increment </button>
            <button onClick={() => counterContext.countDispatch('decrement')}> Decrement </button>
            <button onClick={() => counterContext.countDispatch('reset')}> Reset </button>

        </div>
    )
}

export default ComponentD