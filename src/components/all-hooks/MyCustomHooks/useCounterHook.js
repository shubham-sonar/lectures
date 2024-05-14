import React, { useState } from 'react'

const useCounterHook = (initialValue, incrementBy) => {
  const [count, setCount] = useState(initialValue);

  const incrementCount = ()=>{
    setCount(count + incrementBy);
  }

  const decrementCount = ()=>{
    setCount(count - incrementBy);
  }
  
  const reset = ()=>{
    setCount(initialValue);
  }

  return [ count, incrementCount, decrementCount, reset]
}

export default useCounterHook