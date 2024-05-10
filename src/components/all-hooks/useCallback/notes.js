/*
? What is useCallback..?
Ans = The React useCallback Hook returns a memoized callback function.
- Think of memoization as caching a value so that it does not need to be recalculated.

? Stack Overflow's Ans - 
Ans => useCallback and useMemo hooks which helps in storing the non primitive data type values under the same memory reference if there is no change in the values between the rendering.
- Now, the useEffect can compare its non primitive dependencies and be made to run only if there is actual change in the dependencies.
- If the function is used as dependency in the useEffect then, that function can be wrapped in the useCallback which returns memoized function i.e., returns same function definition stored under the same memory reference unless function dependency is not changed.



? Why we use React.memo and callbacks..?
Ans - 
- If we change the state of the parent component like here, simpleUseCallback, then all the components in the parent component will rerender. It is not optimum to rerender all the components all the time when it is not necessary. Therefore for performance optimization we use following code line.
~ export React.memos(componentName).

- Memos ensure that the component is only rerendered when there is any change in the props or the state of the component. 
- Therefore, this component is not generally recalled. But when we are passing the function as the prop to the component then while the parent rerenders the same new function is created therefore there is change in the reference means the monitor assumes that there is change in the function which is passed as the prop and therefore the other child component is also rerendered. 
- In my example both the Buttons components are rerendered if we click any one button. This is not optimum if we have 1000's of sibbling and nested components. Therefore we use callBacks along with the React.memos.

- useCallback takes in the function as the callback function and this function is memoised means storred in the cache and only called if any of the dependencies have changed. We pass dependencies as the second argument in an array. Thus it will only call/recreate the function again with new reference if the dependencies have changed.

- Therefore callBacks are most important for performance optimization.

? What is the difference between the useCallback and useMemo hooks.?

- The useCallback and useMemo are used to perform the similar operation of optimising the rerenders. 
- The only difference between the CB and Memo is that during rerenders the useCallback will prevent the reinitialization of the function that has been once initialized and useMemo will prevent the the reexecution if the dependencies are not changed.
- But if we need the same output using the same function without reinitialization then we cant get that. 
Thus we can say that the useCallback prevents the reinitialization of the function.
- But useMemo will prevent the rerun of a function and uses the first of last outcome to display the results. This is done by caching the result of the funciton.

todo -> Simply it means that the useCallback prevents the unnecessary reinitializations of the function to prevent the change in reference. Whereas the useMemo prevents the reexecution of a function and returns the memoised or cached result every time unless the dependencies are not changed.


? -------> Read the Following carefully 

? Interviewer - What is the difference between useCallback and useMemo hook.

- useCallback is a hook that optimizes the rendering performance of function components by memoizing a function and returning a memoized version of it. 
- This means that the function returned by useCallback will only be recreated if one of its dependencies changes. 
- By doing this, unnecessary re-renders can be prevented since the memoized function will not be recreated on every render.


- useMemo is a hook that optimizes the performance of function components by memoizing the result of a function and returning a memoized version of it. 
- This means that the result returned by useMemo will only be recalculated if one of its dependencies changes. 
- By doing this, unnecessary calculations can be prevented since the memoized result will be returned if the dependencies haven't changed.

*/