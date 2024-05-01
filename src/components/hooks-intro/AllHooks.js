import React, { useState, useEffect, useContext, useReducer, useCallback, useMemo, useRef } from 'react';

// useState: This Hook lets you add React state to function components.
// Equivalent to this.state and this.setState in a class component.
function Counter() {
  const [count, setCount] = useState(0); // Initialize state

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}

// useEffect: This Hook lets you perform side effects in function components.
// Equivalent to componentDidMount, componentDidUpdate, and componentWillUnmount in a class component.
function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, []); // Empty array means run once like componentDidMount

  return <div>Timer: {seconds} Seconds</div>;
}

// useContext: This Hook lets you subscribe to React context without introducing nesting.
// Equivalent to static contextType in a class or <MyContext.Consumer>.
const MyContext = React.createContext();

function ComponentUsingContext() {
  const value = useContext(MyContext);
  return <div>Context Value: {value}</div>;
}

// useReducer: This Hook is used for state logic that involves multiple sub-values or when the next state depends on the previous one.
// Alternative to useState when complex state logic is needed.
function ReducerCounter() {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
  }, { count: 0 });

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </>
  );
}

// useCallback: Returns a memoized callback function.
// Useful to prevent functions from being recreated on every render unless their dependencies change.
function CallbackComponent() {
  const memoizedCallback = useCallback(
    () => {
      console.log("This function is memoized!");
    },
    [], // Dependencies array
  );

  return <button onClick={memoizedCallback}>Call Memoized Function</button>;
}

// useMemo: Returns a memoized value.
// Useful for expensive calculations that shouldn’t be run on every render.
function ExpensiveComponent() {
  const memoizedValue = useMemo(() => {
    return computeExpensiveValue(a, b);
  }, [a, b]); // Only recompute if a or b changes

  return <div>Expensive Value: {memoizedValue}</div>;
}

// useRef: Returns a mutable ref object whose .current property is initialized with the passed argument.
// The object persists for the full lifetime of the component.
function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    inputEl.current.focus();
  };

  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}

// Exporting components for demonstration (not part of the same app normally)
export { Counter, Timer, ComponentUsingContext, ReducerCounter, CallbackComponent, ExpensiveComponent, TextInputWithFocusButton };
