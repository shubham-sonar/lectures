import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';


/*
? Function Components:
 Defined as functions that return HTML via JSX. They are simpler compared to class components and are preferred for modern React development, especially with the introduction of hooks in React 16.8.

? Props:
 Short for properties, props are how you pass data and event handlers down to child components. In this example, Car receives a color prop to dynamically define its display.

? Rendering Components:
 Demonstrates how to render a component within another component (Car inside Garage) and how to mount the top-level component (Garage) into the DOM using ReactDOM.

? Composition:
 Showcases React's compositional nature where components can be nested within others to build complex UIs efficiently.


? React Fragments:
 Used in the Garage component to group multiple elements without adding extra nodes to the DOM, which is helpful for CSS styling, performance, and semantic HTML.
*/

//? Function Component

//? What is the component?  
// Components in React are independent, reusable pieces of code that return HTML, similar to functions in JavaScript.

// They can be either Class components or Function components. Here, we focus on Function components for their simplicity and use with hooks.

function Car(props) {
  // This component receives props, similar to function arguments, and returns JSX that is essentially HTML.
  // We use props to enhance component reusability and dynamism.
  return <h2>I am a {props.color} Car!</h2>;
}

// Components can be rendered inside other components, demonstrating composition and reuse.
function Garage() {
  // The Car component is nested within the Garage component, showing how components can be composed.
  // <> and </> are fragments that let you group a list of children without adding extra nodes to the DOM.
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <Car color="blue" />  {/* Passing 'blue' as a prop to the Car component */}
    </>
  );
}

// Creating the root container where the React component tree will be mounted.
const rootElement = document.getElementById('root'); // Points to a DOM element with the ID 'root'
const root = ReactDOM.createRoot(rootElement);

// Rendering the Garage component inside the 'root' element.
// The Garage component includes the Car component, demonstrating component hierarchy and rendering.
root.render(<Garage />);

// IMP Guys
// Components should be defined in separate files and imported where needed to promote reusability and modularity.
// The filename should start with an uppercase letter and be followed by '.js' (or '.jsx' for more explicit React JSX syntax).

// ? Class Component


class MyClassComp extends Component{
  constructor(props){
      super(props);
      this.state = {
          message : "Hey How are you doing?"
      };
  }

  render(){
      return(
          <div>
              <h1> Class Based Component </h1>
              {this.state.message}
          </div>
      )
  }
}
// export default MyClassComp;