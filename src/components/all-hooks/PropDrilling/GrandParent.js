import React from 'react'
import Parent from './Parent'

const GrandParent = () => {

  return (
    <>
    <h1>GrandParent name = Ancestor</h1>
    <Parent value={"Ancestor"}/>
    </>
  )
}

export default GrandParent