import React, { useContext } from 'react'
import { ReducerContext } from '../../../HooksApp'

function ComponentE() {
    const counterContext = useContext(ReducerContext);

    return (
        <div>ComponentE = count : {counterContext.countState}
            <button onClick={() => counterContext.countDispatch('increment')}> Increment </button>
            <button onClick={() => counterContext.countDispatch('decrement')}> Decrement </button>
            <button onClick={() => counterContext.countDispatch('reset')}> Reset </button>

        </div>
    )
}

export default ComponentE