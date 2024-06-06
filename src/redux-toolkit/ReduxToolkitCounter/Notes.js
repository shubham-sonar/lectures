
/*
! Redux toolkit

 ? Interview:
 ? Redux toolkit is a centralized state manangement library which simplifies the consumption and updation of the state in the entire application.

 ? Why Redux toolkit and not redux?
 * We don't need to use the combineReducers() funciton, We get useDispatch() and useSelector() hooks for managing the state. The state and the update logic resides in a single slice.
 
 ? Redux Toolkit simplifies Redux development by providing powerful utility functions.
 * imp functions are createSlice, configureStore, and actions from slices.
 
 */

//? Step 1: Setup Redux Toolkit
// First, install Redux Toolkit and React-Redux:
//*      npm install @reduxjs/toolkit react-redux

/*

? Functions we use:

- createSlice: Defines a slice of the state with reducers and actions.
- configureStore: Sets up the Redux store with the slice reducers.
- useDispatch: Returns the dispatch function to send actions.
- useSelector: Accesses the Redux store state.
*/