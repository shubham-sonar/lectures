import React, { Component } from 'react';

/*
! ErrorBoundary Class Component

* - An ErrorBoundary component is designed to catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.
* - Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.

? Why we Use Error Boundaries?
* - To prevent the entire React application from crashing if an error occurs in a part of the UI.
* - To handle errors gracefully by showing a user-friendly error message.

? How to Implement:
* - Error boundaries are implemented using class components because they require lifecycle methods like `componentDidCatch` or static `getDerivedStateFromError`.
*/

export class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    // Catch errors in any components below and re-render with error message
    static getDerivedStateFromError(error) {
        // Update state so next render shows fallback UI
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        this.setState({  hasError: true, error: error, errorInfo: errorInfo });
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <div>
                    <h2>Something went wrong. Please Try Again</h2>
                </div>
            );
        }

        // Normally, just render children
        return this.props.children;
    }
}


/*

* - `ErrorBoundary` wraps `SomeComponent`. If `SomeComponent` or any of its descendants throw an error, `ErrorBoundary` will catch it and display a fallback UI.
* - This pattern allows you to encapsulate potentially problematic components and ensure that parts of your app can fail without affecting the whole application.

? - Error boundaries do not catch errors for:
  * Event handlers (You need to use try/catch yourself inside event handlers.)
  * Asynchronous code (e.g., setTimeout or requestAnimationFrame callbacks)
  * Server-side rendering
  * Errors thrown in the error boundary itself (rather than its children)
*/
