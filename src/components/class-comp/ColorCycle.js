import React from 'react';

// Define the class component ColorCycle
class ColorCycle extends React.Component {

  // This is the required method if we are using state or props
  constructor(props) {
    super(props);
    // Step 1: Initialize the component's state
    this.state = { color: "red" };
    console.log('Constructor: Set initial state.');
  }

  // Step 2 and 5: Derived state from props before initial render or re-renders due to prop changes
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps: Sync state to props if needed.');
    // return props.initialColor !== state.color ? { color: props.initialColor } : null;
  }

  // Step 4: Perform side-effects (e.g., API calls, subscriptions) after component mounts
  componentDidMount() {
    console.log('componentDidMount: Component is now in the DOM.');
    this.timerID = setInterval(() => this.changeColor(), 5000);
  }

  // Step 6: Decide whether to re-render the component
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate: Decide to render based on new props or state.');
    // Only re-render if the color changes
    // This method always only returns the boolean value. Which says that whether a componet should update or not.
    return this.state.color !== nextState.color;
  }

  // Step 8: Before the DOM updates, capture some properties (e.g., scroll position)
  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log('getSnapshotBeforeUpdate: Capture some properties before the DOM updates.');
  //   return prevState.color;
  // }

  // Step 9: Perform actions after the component updates
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(`componentDidUpdate: Component did update. Previous color was ${snapshot}`);
  }

  // Step 10: Cleanup the component before it unmounts from the DOM
  componentWillUnmount() {
    console.log('componentWillUnmount: Cleanup before unmounting.');
    clearInterval(this.timerID);
  }

  // Method to change color
  changeColor = () => {
    this.setState({
      color: `#${Math.floor(Math.random() * 16777215).toString(16)}`
    });
  }

  // Step 3 and 7: Required method, renders the component to the DOM
  render() {
    console.log('render: Render the component to the DOM.');
    return (
      <div style={{ height: '100px', backgroundColor: this.state.color }}>
        <h1>My favorite color is {this.state.color}</h1>
        <button onClick={this.changeColor}> Change Color </button>
      </div>
    );
  }
}

export default ColorCycle;
