import React from 'react'

const ErrorCausing = () => {
  return (
    <div>
      <button onClick={()=> {throw new Error('New error')}}> Throw error</button>
    </div>
  )
}

export default ErrorCausing