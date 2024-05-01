import React, { useState } from 'react';

// App component
function Jsxbasic() {
  // State hooks for various features
  const [theme, setTheme] = useState('light');
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);

  // Handling theme toggle
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Handling note input change
  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  // Handling note submission
  const addNote = () => {
    setNotes([...notes, note]);
    setNote('');  // Clear the input after adding a note
  };

  return (
    <div>

      {/* Static attribute and dynamic style based on state */}
      <h1>Welcome to the Note App!</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>

      {/* Inline if with logical && operator */}
      {theme === 'dark' && <p>Dark mode is enabled</p>}

      {/* Conditional rendering using ternary operator */}
      <input
        value={note}
        onChange={handleNoteChange}
        placeholder="Write a note here..."
        style={{ backgroundColor: theme === 'light' ? '#eee' : '#bbb' }}
      />
      <button onClick={addNote}>Add Note</button>

      {/* Mapping over an array to render a list of items */}
      <ul>
        {notes.map((note, index) => (
          <li key={index}>{note}</li>  // Using index as key for list items
        ))}
      </ul>

      {/* Conditional rendering to display messages or content */}
      {notes.length > 0 ? (
        <p>You have {notes.length} notes.</p>
      ) : (
        <p>No notes yet! Add some using the above input.</p>
      )}
    </div>
  );
}

export default Jsxbasic;
