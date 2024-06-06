import React, { useState } from 'react';
import { Provider, useDispatch } from 'react-redux';
import store from './store';
import { addTodo } from './todosSlice';
import TodoList from './TodoList';

const TodoApp = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <TodoList />
    </div>
  );
};

const MyTodoApp = () => (
  <Provider store={store}>
    <TodoApp />
  </Provider>
);

export default MyTodoApp;
