import React from "react";
import { createSlice } from "@reduxjs/toolkit";

// ? What is a slice - A slice is a combination of the state and the logic that is used to change it. Here it will have the slicename, initialstate, reducers.

const CounterSlice = createSlice({
  name: "count",
  initialState: { count: 1 },
  reducers: {
    add: (state, action) => {
      state.count = state.count + 1;
    },
    sub: (state, action) => {
      state.count = state.count - 1;
    },
    reset: (state, action) => {
      state.count = 0;
    }
  }
});

export const { add, sub, reset } = CounterSlice.actions;
export default CounterSlice.reducer;




/*
 ? 1. createSlice:
 * - A function that accepts an initial state, an object of reducer functions, and a slice name.
 * - It automatically generates action creators and action types.

In background
 const obj = createSlice();
 the object will have the following obj = { actions, reducer }
 the actions will have the reducer actions actions = { add, sub, reset }

 ? Syntax:

 const slice = createSlice({
   name: 'sliceName',
   initialState: initialStateValue,
   reducers: {
     actionName: (state, action) => {
       // logic to handle the action
     },
   }
 });
 * The createSlice function returns an object with 'actions' and 'reducer'.


 */