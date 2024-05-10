import React, { useCallback, useState } from 'react'
import MemoChild from './MemoChild';
import MemoChildState from './MemoChildState';

const Optimize = () => {
    const [state, setState] = useState(0);
    const [stateTwo, setStateTwo] = useState(0);
    console.log("The parent component (Optimize)");

    // The useCallback is used to prevent the reinitialization of a function when parent is rerendered.
    
    const normalFunction = useCallback(()=>{
        console.log("Hi I am a normal function")
    },[])

  return (
    <div>
       <h3>  Optimize components </h3>
       <h4>Counter one : {state}</h4>
       <h4>Counter two : {stateTwo}</h4>
        <MemoChild />
        <br/>
        <br/>
        <MemoChildState count={state} callback={normalFunction}/>
        <button onClick={()=>setState((prevState)=> prevState + 1)}>Add count1</button>
        <br/>
        <button onClick={()=>setStateTwo((prevState)=> prevState + 1)}>Add count2</button>
    </div>
  )
}

export default Optimize