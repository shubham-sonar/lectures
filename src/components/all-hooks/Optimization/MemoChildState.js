import React from 'react'

const MemoChildState = ({count, callback}) => {
    console.log("The Child component with state change and React.memo");
    callback();
  return (
    <div>I am MemoChildState : My Counter = {count}</div>
  )
}

export default React.memo(MemoChildState)
