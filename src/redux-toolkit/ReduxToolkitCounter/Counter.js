import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, sub, reset } from "./CounterSlice";
// import store from "./store";
import { Button, Paper } from "@mui/material";
// import { Button, Paper } from "@material-ui/core";

const Counter = () => {
  const count = useSelector((state) => state.count.count);
  const dispatch = useDispatch();
  //   console.log(count);

  return (
    <Paper elevation="3">
      <div style={{ margin: "10px", padding: "10px" }}>
        <h4> Redux Toolkit Counter </h4>
        <Paper elevation="2">
          <h2 style={{ color: "red" }}> Counter : {count} </h2>{" "}
        </Paper>

        <Button
          color="primary"
          variant="contained"
          size="medium"
          onClick={() => dispatch(add())}
        >
          Add
        </Button>
        <Button
          color="secondary"
          variant="contained"
          size="medium"
          onClick={() => dispatch(sub())}
        >
          Substract
        </Button>
        <Button
          color="secondary"
          variant="outlined"
          size="medium"
          onClick={() => dispatch(reset())}
        >
          Reset
        </Button>
      </div>
    </Paper>
  );
};

export default Counter;


/*
 ? 3. useDispatch and useSelector:
 * - useDispatch: A hook that returns a reference to the dispatch function from the Redux store.
 * - useSelector: A hook that extracts data from the Redux store state using a selector function.
 
 ? Syntax:
  const dispatch = useDispatch();
  const data = useSelector(selectorFunction);

? Flow when a button is clicked:
  1. The user clicks a button, triggering an onClick event.
  2. The onClick event calls the dispatch function with an action.
     Example: dispatch(add())
  3. The dispatched action is sent to the Redux store.
  4. The Redux store processes the action using the corresponding reducer.
     Example: The 'add' reducer increases the state value by 1.
  5. The Redux store updates the state with the new value.
  6. The updated state is passed to the components using useSelector.
     Example: The Counter component re-renders with the new count value.
*/