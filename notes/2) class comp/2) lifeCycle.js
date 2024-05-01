/*

! Mounting Phase

This is the phase when the component is being created and inserted into the DOM. It's crucial for initializing the component, setting up initial state, fetching data, and performing event and timer subscriptions.

? 1. constructor(props):

   - Purpose: Initializes the component with props and sets up the initial state, and binds event handler methods.
   - Real-world Use: In a chat application, you might initialize state with an empty list of messages and set up initial configurations.
   - Not compulsory unless and untill you need to used state and props.

   - Example:
     
     constructor(props) {
       super(props);
       this.state = { messages: [] };
     }
     

? 2. static getDerivedStateFromProps(props, state):

  - Purpose: Before every rendering process, this static method is invoked to derive state from props if the state depends on changes in props.
  - Real-world Use: In a dashboard displaying user data, if the user ID prop changes, this method can reset certain state variables.
  - Not compulsory

   - Example:
     
     static getDerivedStateFromProps(props, state) {
       if (props.userID !== state.lastUserID) {
         return {
           lastUserID: props.userID,
           userData: null
         };
       }
       return null;
     }
     

? 3. render():
  
  - Purpose: The only required method in a class component, it reads props and state and returns JSX or other components to build the DOM.
  - Real-world Use: In an e-commerce site, `render` could return different layouts based on the state of items in the cart.
  - Compulsory to see the component on the UI.

   - Example:
     
     render() {
       return <div>Welcome, {this.state.username}!</div>;
     }
     

? 4. componentDidMount():
  
    - Purpose: Called after the component is rendered into the DOM, it's used for DOM manipulation, fetching data, and setting up subscriptions.
   - Real-world Use: Fetching user data from a server after a component is initially rendered.

   - Example:
     
     componentDidMount() {
       fetch(`https://api.example.com/user/${this.state.userID}`)
         .then(res => res.json())
         .then(data => this.setState({ userData: data }));
     }
     

! Updating Phase

This phase deals with changes to props or state and re-rendering the component. It’s where you optimize performance and react to changes in state.

? 1. static getDerivedStateFromProps(props, state):
   - Same as in the mounting phase, used for adjusting the state before the render method is called.

? 2. shouldComponentUpdate(nextProps, nextState):
   - Purpose: Determines whether the component should update in response to changed props or state, optimizing performance by avoiding unnecessary renders.
   - Real-world Use: Preventing a component from updating if the new props and state are identical to the current props and state.
   - Example:
     
     shouldComponentUpdate(nextProps, nextState) {
       return nextProps.id !== this.props.id || nextState.count !== this.state.count;
     }
     

? 3. render():
   - Same as in the mounting phase, but used here to re-render the UI based on state and prop changes.

? 4. getSnapshotBeforeUpdate(prevProps, prevState):
   - Purpose: Captures some information from the DOM before it is potentially changed. Useful for handling things like maintaining scroll position.
   - Real-world Use: In a messaging app, maintaining the scroll position after new messages load if the user was scrolled up to read older messages.
   - Example:
     
     getSnapshotBeforeUpdate(prevProps, prevState) {
       if (prevState.list.length < this.state.list.length) {
         const list = this.listRef.current;
         return list.scrollHeight - list.scrollTop;
       }
       return null;
     }
     

? 5. componentDidUpdate(prevProps, prevState, snapshot):
   - Purpose: Called after the updates are flushed to the DOM, it is used for executing code after the update, based on the old props, state, or snapshot value.
   - Real-world Use: If a new message is added to a chat, scroll to the bottom of the chat window.
   - Example:
     
     componentDidUpdate(prevProps, prevState, snapshot) {
       if (snapshot !== null) {
         const list = this.listRef.current;
         list.scrollTop = list

.scrollHeight - snapshot;
       }
     }
     

! Unmounting Phase

This phase occurs when a component is being removed from the DOM. It’s crucial for cleaning up resources to avoid memory leaks.

? 1. componentWillUnmount():
   - Purpose: Cleans up any timers, event listeners, or subscriptions made in `componentDidMount`.
   - Real-world Use: Removing a resize listener from a window or clearing a timer used to periodically update a component.
   - Example:
     
     componentWillUnmount() {
       window.removeEventListener('resize', this.handleResize);
       clearInterval(this.intervalID);
     }
     
*/