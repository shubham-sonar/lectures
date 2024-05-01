import React, { useState } from "react";

function J1basics() {
  //* In this function you can write any code or anything that you can do in a normal JS function.
  //* Because essentially this file is also a JS / JSX file.

  // Plain Javascript code.
  const name = "Shubham";

  // Element Variables in React. And usage of JS in JSX.
  const element = <div> Say Hello to {name} </div>;

  // Example of using the For loop and JSX in for loop.
  let elementArray = [];

  for (let i = 0; i < 2; i++) {
    elementArray.push(<div> Say Hello to {name} </div>);
  }

  // Element for dynamic attribute, stle attribute.
  let styleH1 = {
    color: "yellow",
  };

  //  Conditional Rendering using shortcircuit evaluation

  const messages = ["React", "Re: React", "Re:Re: React"];
  const mailbox = (
    <div>
      <h1>Hello!</h1>
      {messages.length > 0 && (
        <h2>You have {messages.length} unread messages.</h2>
      )}
    </div>
  );

  // Conditional rendering using the ternarry operator
  const isLoggedIn = true;
  const userGreeting = <h1>Welcome back!</h1>;
  const guestGreeting = <h1>Please sign up.</h1>;

  const greeting = isLoggedIn ? userGreeting : guestGreeting;

  // Using alternatives of for loop in JSX

  const todos = ["Finish homework", "Clean room", "Write blog"];
  const todoList = (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}> {todo} </li>
      ))}
    </ul>
  );

  return (
    <>
      {/* Using the element variable while rendering */}
      {element}

      {/* Using the array of elements while rendering */}
      {elementArray}

      {/* Attribute with dynamic style */}
      <h1 style={{ color: "yellow" }}> This is dynamic styled H1 </h1>
      <h1 style={styleH1}> This is dynamic styled H1 </h1>

      {/* Nested element */}
      <div>
        <h1>Welcome!</h1>
        <input />
        <h2>Good to see you here, {name}.</h2>
      </div>

      {/* Conditional Rendering */}
      {mailbox}

      {/* Conditional Rendering using the  ternary operator */}
      {greeting}

      {/* Other way to use conditional operator */}
      {isLoggedIn ? <p> Welcome back user </p> : <p> Please sign in</p>}

      {/* Using alternatives of for loop in JSX */}
      {todoList}
    </>
  );
}

export default J1basics;
