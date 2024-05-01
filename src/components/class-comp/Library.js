
import React from 'react';
import Book from './Book'; // Importing the Book component

// Library class component which uses Book
class Library extends React.Component {
  render() {
    return (
      <div>
        <h1>Local Library</h1>
        <Book />
        <Book />
        <Book />

      </div>
    );
  }
}

export default Library;