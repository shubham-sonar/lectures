import React from 'react'
import useCounterOp from './useCounterOp';

function CustomCounter() {

    const { count, incrementCount, decrementCount, reset } = useCounterOp(0, 1);

    return (
        <div>CustomCounter First
            <h3> Counter : {count}</h3>
            <button onClick={incrementCount}> Increment </button>
            <button onClick={decrementCount}> Decrement </button>
            <button onClick={reset}> Reset </button>
        </div>
    )
}

export default CustomCounter