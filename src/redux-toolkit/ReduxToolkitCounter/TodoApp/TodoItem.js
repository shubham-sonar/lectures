import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodo, updateTodo } from './todosSlice';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleRemove = () => {
    dispatch(removeTodo(todo.id));
  };

  const handleUpdate = () => {
    if (text.trim()) {
      dispatch(updateTodo({ id: todo.id, text }));
      setIsEditing(false);
    }
  };

  return (
    <li>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={handleUpdate}>Update</button>
        </div>
      ) : (
        <div>
          <span
            onClick={handleToggle}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            {todo.text}
          </span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={handleRemove}>Delete</button>
        </div>
      )}
    </li>
  );
};

export default TodoItem;
