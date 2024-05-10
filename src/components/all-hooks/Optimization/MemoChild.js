import React from 'react'

const MemoChild = () => {
    console.log("The Child component");
  return (
    <div>I am MemoChild </div>
  )
}

export default React.memo(MemoChild)

// Below is unoptimised version of the MemoChild
// export default MemoChild

// ? React.memo = it optimizes the component in such a way that the component will rerender only if the props or the state of the component is changed. 

// This prevents the default behaviour of React to rerender all the children if the parent is rerendered.
// React.memo() - optimizes the component and memoizes it. It transforms the component into the Pure Component.

//? Pure Component = A component which rerenders only if its dependencies or state changes. (Regardless of its parent being rerendered) 


// ? What are HOC's and why we use them?
// The React.memo is an example of HOC = Higher order component
// HOC = The component that is used to apply a common logic on some other cpmponents by accepting the component as an argument and returning the enhanced compnent with the desired logic or functionality.
// HOC's always returns the function or functional component which inturn returns the JSX.