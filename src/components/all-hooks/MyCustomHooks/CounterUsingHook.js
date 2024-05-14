import React from 'react'
import useCounterHook from './useCounterHook'

const CounterUsingHook = () => {

    const [count,  incrementCount, decrementCount, reset] = useCounterHook(0, 2);

    const [c,  ic, dc, res] = useCounterHook(0, 2);

  return (
    <div>CustomCounter First
    <h3> Counter : {count}</h3>
    <button onClick={incrementCount}> Increment </button>
    <button onClick={decrementCount}> Decrement </button>
    <button onClick={reset}> Reset </button>
    <h3> Counter : {c}</h3>
    <button onClick={ic}> Increment </button>
    <button onClick={dc}> Decrement </button>
    <button onClick={res}> Reset </button>
</div>
  )
}

export default CounterUsingHook