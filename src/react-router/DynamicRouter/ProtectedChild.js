import React from 'react'

const ProtectedChild = () => {
  return (
    <div>
        <h2> This is the protected component </h2>
        <h2> Rendered only if the User is logged in </h2>
    </div>
  )
}

export default ProtectedChild