import React from 'react'
import useCounterOp from './useCounterOp'

function CustomCounter2() {
    /*
        const [count, setCount] = useState(0)
    
        const incrementCount = () => {
            setCount(count + 1);
        }
    
        const decrementCount = () => {
            setCount(count - 1);
        }
    
        const reset = () => {
            setCount(0);
        }
    
        We will keep this comented code in the useCounter hook so that wee can reuse it by just calling it when needed.
        This will prevent the repetition in the next components like CustomCounter2.js
        Hook will be useCounterOp.js
    */

    const { count, incrementCount, decrementCount, reset } = useCounterOp(0, 1);

    return (
        <div>CustomCounter2 First
            <h3> Counter : {count}</h3>
            <button onClick={incrementCount}> Increment </button>
            <button onClick={decrementCount}> Decrement </button>
            <button onClick={reset}> Reset </button>
        </div>
    )
}

export default CustomCounter2