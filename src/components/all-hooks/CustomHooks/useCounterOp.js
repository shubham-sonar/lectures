import { useState } from 'react'

function useCounterOp(initialValue = 0, value = 1) {

    const [count, setCount] = useState(initialValue)

    const incrementCount = () => {
        setCount(count + value);
    }

    const decrementCount = () => {
        setCount(count - value);
    }

    const reset = () => {
        setCount(initialValue);
    }

    return { count, incrementCount, decrementCount, reset }
}

export default useCounterOp