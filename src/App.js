// Import the necessary React library and the useState hook
import "./App.css";
import React, { useState } from "react";
import Jsxbasic from "./basicJSX/Jsxbasic.jsx";
import DefaultApp from "./basicJSX/DefaultApp.js";
import Counter from "./components/basic-components/Counter.js";
import J1basics from "./basicJSX/J1basics.js";
import MyClassComp from "./basicJSX/MyClassComp.js";
import Events from "./components/basic-components/Events.js";
import Book from "./components/class-comp/Book.js";
import Library from "./components/class-comp/Library.js";
import ColorCycle from "./components/class-comp/ColorCycle.js";
import InlineStylingComponent from "./components/css-style/InlineStylingComponent.js";
import CSSStylesheetComponent from "./components/css-style/CSSStylesheetComponent.js";

// Define a functional component called App
function App() {
  // Render the component using JSX
  return (
    <div>
      <div className="App">
        <header className="App-header">
          {/* First Default React component */}
          {/* <DefaultApp/> */}

          {/* Counter using useState */}
          <Counter />

          {/* JSX first file */}
          {/* <J1basics/> */}

          {/* JSX */}
          {/* <Jsxbasic/> */}

          {/* Class based component */}
          {/* <MyClassComp props={{name: "Shubham"}}/> */}

          {/* React Events */}
          {/* <Events/> */}

          {/* Class based component in detail */}
          {/* <Book /> */}
          {/* <Library/> */}

          {/* React life cycle methods in class based components */}
          {/* <ColorCycle initialColor="blue"/> */}

          {/* CSS styling the React app */}
          {/* <InlineStylingComponent /> */}
          {/* <CSSStylesheetComponent /> */}
          
        </header>
        <div style={{ height: "150px" }}></div>
      </div>
    </div>
  );
}

// Export the App component to be used in other parts of the application
export default App;
