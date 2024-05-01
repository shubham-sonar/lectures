/*

!----------------- React Class Components ----------------------

1. Class Components: Defined by extending `React.Component`. These components can maintain their own state and handle lifecycle methods to perform actions at specific points in a component’s life.
syntax :

class MyComponent extends React.Component{

}


2. State Management: Each `Book` component manages its state, such as the title, author, page count, and read status. The state is mutable via `this.setState()`, and changes trigger re-renders of the component.


3. Event Handling: Managed by methods bound to event listeners in JSX. For example, `toggleReadStatus` updates the read status of the book.

4. Props: While this example doesn’t demonstrate props passing, it’s crucial to note that props are read-only and passed to child components like parameters to a function. They are crucial for component reusability and control from parent components.

5. Nesting Components: The `Library` component demonstrates how React supports component composition by including the `Book` component within its render method.

*/