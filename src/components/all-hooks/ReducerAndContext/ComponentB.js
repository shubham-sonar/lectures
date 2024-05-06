import React, { useContext } from 'react'
import { ReducerContext } from '../../../HooksApp'

function ComponentB() {
    const counterContext = useContext(ReducerContext);
    // const {countState, countDispatch} = useContext(ReducerContext);

    return (
        <div>ComponentB = count : {counterContext.countState}
            <button onClick={() => counterContext.countDispatch('increment')}> Increment </button>
            <button onClick={() => counterContext.countDispatch('decrement')}> Decrement </button>
            <button onClick={() => counterContext.countDispatch('reset')}> Reset </button>

        </div>
    )
}

export default ComponentB