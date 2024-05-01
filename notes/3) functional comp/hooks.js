/*
? What are Hooks in React?

- Interviewer definition = Hooks are functions that let you “hook into” React state and lifecycle features from function components. 

- Introduced in React 16.8, they provide a more direct API to the React concepts you already know—such as props, state, context, refs, and lifecycle—without the need to use classes (Class based components).

? Why We Use Hooks in React

- Functional Components with State: Before Hooks, functional components were unable to handle state or lifecycle features, which were only possible in class components.

- Hooks enable functional components to use React state and other features without writing a class.

- Reusable Stateful Logic: Hooks allow you to reuse stateful logic without changing your component hierarchy. 
This makes it easier to extract and share hooks among components or even across different projects.

- Simpler Code: Hooks provide a simpler and more concise way to write components. 
  They avoid the complexities of classes, such as this keyword, binding event handlers, and more. 
  This results in less boilerplate code and a clearer component logic.

- Organized Side Effects: Using the useEffect hook, you can combine various lifecycle behaviors into a single API, making it easier to organize side effects in a central place.

- Better Conventions: Hooks encourage better programming practices and architecture by organizing related logic into reusable hooks. 
This can lead to improved code maintainability and development efficiency.



! Rules of Using Hooks

- React provides specific rules that must be followed when using Hooks in order to ensure components behave consistently and errors are minimized:

- Only Call Hooks at the Top Level: Do not call Hooks inside loops, conditions, or nested functions.

- Hooks should always be used at the top level of your React function to ensure that Hooks are called in the same order each time a component renders.

- Only Call Hooks from React Functions: You should only call Hooks from React function components or from custom Hooks.

- Calling Hooks from regular JavaScript functions, classes, or anywhere else can lead to incorrect behavior.

- Custom Hooks Naming Convention: Custom Hooks must start with use (e.g., useCustomHook) so that React can automatically check for violations of rules 1 and 2 during the linting phase.

*/