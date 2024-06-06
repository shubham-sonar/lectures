import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./CounterSlice";

const store = configureStore({
  reducer: {
    count: CounterReducer
  }
});

export default store;


/*
 ? 2. configureStore:
 *  - A function that sets up the Redux store with good defaults.
 *  - It accepts a configuration object with a 'reducer' field and optional middleware, devTools, and other options.

 
 ? Syntax:
 
 const store = configureStore({
   reducer: {
     sliceName: sliceReducer,
     ...
   },
   middleware: [...], // optional
   devTools: boolean, // optional
   preloadedState: {...}, // optional
   enhancers: [...], // optional
 });
 
*/
