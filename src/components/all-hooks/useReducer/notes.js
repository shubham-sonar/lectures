/*
! USEREDUCER
- useReducer is similar to array.reduce() method.
- It also reduces the values into the last imp value that is somehow accumulation of the previous values.

- useReducer is a hook that is used for mostly non-premitive state management in react.

? Syntax of useReducer Hook
- const [variable, dispatchVariable] = useReducer(reducer, initialState)

? Syntax of reducer function
- reducer(currentState, action){
    - perform somelogic and return new state.
    - We will always return the new state which has similar structure like the initial state.
    {count : count + 1 }
}

? Example of initial state.
const iState = {
    count: 0
}

? using dispatch like setState()

dispatchVariable("increment");

? using the reducer
<h1>{vaiable.count}</h1>

! ----------------------------------------------------

? array.reduce() functionality
arr.reduce(myReduce)

myReduce(prev, current, index, array){
    do something
    return totalValue;
}

reduce(callback){
    callback(this.prev, this.current, this.index, this);
}

! When to use the useReducer vs useState.?
* Using  useState.
1 - Type of state - is premitive values like, number, string, boolean.
2 - Number of state transitions - One or Two
3 -  Related state transisition are not present. Means change in one state does not need other state to change.
4 - When there is no Business logic involved.
5 - When we need to make the state variables Local.

* Using  useReducer.
1 - Type of state - Is non-premitive values like = Object or Array
2 - Number of state transitions - Two many
3 -  Related state transisition are present. Means change in one state does needs many other states to change.
4 - When Business logic is involved.
5 - When we need to make the state variables GLOBAL.
*/