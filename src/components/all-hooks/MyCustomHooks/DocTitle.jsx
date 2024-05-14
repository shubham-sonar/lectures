import React, { useState } from 'react'
import useDocumentTitle from '../useDocumentTitle';

const DocTitle = () => {
const [count, setCount] = useState(0);

useDocumentTitle(count);

  return (
    <div> 
        <h2> Please check the DocTitle</h2>
        <button onClick={()=> setCount(count +1)}>Increment Count</button>
    </div>
  )
}

export default DocTitle