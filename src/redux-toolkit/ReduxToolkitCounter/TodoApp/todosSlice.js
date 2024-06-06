import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: Date.now(), text: action.payload, completed: false });
    },
    removeTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    updateTodo: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text;
      }
    }
  }
});

export const { addTodo, removeTodo, toggleTodo, updateTodo } = todosSlice.actions;
export default todosSlice.reducer;








/*
 - addTodo: Adds a new todo item to the state array. We don't need to return the new state because Redux Toolkit uses Immer library to handle immutability.
 - removeTodo: Filters out the todo with the specified id. Returning the new array is required because we are creating a new state.
 - toggleTodo: Finds the todo by id and toggles its completed status. We mutate the state directly because Immer handles it under the hood.
 - updateTodo: Finds the todo by id and updates its text. Direct mutation is used here as well.
 */
