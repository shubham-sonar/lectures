/*
! How, Why, and When Error Lifecycle Methods are Executed

- Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of allowing the whole app to crash. 

- The lifecycle methods associated with error boundaries are `static getDerivedStateFromError()` and `componentDidCatch()`. These methods are only available in class components.

? 1. static getDerivedStateFromError(error)

- How it works: This static method is used to render a fallback UI after an error is caught. It is called during the "render" phase, so side-effects are not permitted.

- Why it's used: It lets the component catch the error and adjust its state accordingly, preparing for the next render, which might include a fallback UI if the state dictates so.

- When it's executed: This method is triggered immediately after an error occurs in any descendant component (but not in the error boundary itself).

? Syntax:

static getDerivedStateFromError(error) {
    // Update state so the next render shows the fallback UI.
    return { hasError: true };
}


? 2. componentDidCatch(error, errorInfo)

- How it works: This method is called during the "commit" phase, so it allows side-effects like logging the error to an error reporting service. It receives two arguments: the error that was thrown and an object with info about the error.

- Why it's used: It’s used for error reporting. While `getDerivedStateFromError` is used to handle the state change and render a fallback UI, `componentDidCatch` is used to log error details or perform other side effects.

- When it's executed: It is called after the error is caught and after `getDerivedStateFromError` has been called. It does not prevent the component from re-rendering.

? Syntax:

componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service
    console.log(error, errorInfo);
}

? Sequence of Execution
When an error is thrown in a descendant component:

1. getDerivedStateFromError is called first. This method can return an object to update state, helping the component transition to a new state that will trigger a re-render.

2. The component re-renders with the new state.

3. componentDidCatch is then executed. This method does not trigger a re-render but can be used to log the details of the error and errorInfo.

*/