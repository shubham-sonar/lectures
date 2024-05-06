import React from 'react'
import Child from './Child'

const Parent = ({value}) => {
  return (
    <> 
    <h2>Parent</h2>
    <Child value={value}/>
    </>

  )
}

export default Parent