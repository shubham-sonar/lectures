import React from 'react';

// Book class component definition
class Book extends React.Component {
  // Constructor for initializing state and handling props
  constructor(props) {
    super(props); // Calls the constructor of the base React.Component class.
    // If you are using constructor and props always use props as a pararmeter. (or pass it to the constructor).
    // Initialize state
    this.state = {
      title: "Harry Potter and the Philosopher's Stone",
      author: "J.K. Rowling",
      pageCount: 223,
      // readStatus: "Not Read"
      readStatus: false
    };
  }

  // Method to handle state changes for reading status
  toggleReadStatus = () => {
    // setState is used to update the state and re-render the component
    // this.setState(prevState => ({
    //   readStatus: prevState.readStatus === "Not Read" ? "Read" : "Not Read"
    // }));
   
    this.setState((prevState)=> ({ readStatus : !prevState.readStatus}))
  }

  // Render method to display the component
  render() {
    // Access state using this.state
    return (
      <div>
        <h2>{this.state.title}</h2>
        <p>Author: {this.state.author}</p>
        <p>Pages: {this.state.pageCount}</p>
        <p>Status: {this.state.readStatus ? "Read" : "Unread"}</p>
        <button onClick={this.toggleReadStatus}>Toggle Read Status</button>
      </div>
    );
  }
}

// Export the Book component for use in other files
export default Book;