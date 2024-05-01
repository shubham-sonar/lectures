/*
! You might wonder how React App Execution Process works, its simple guys ---- 

- When you run a React application, several steps occur under the hood to transform your high-level React components and JSX into a web application that browsers can execute. 

- This process involves several modern web development tools and technologies, including Babel, Webpack, development servers like Webpack Dev Server, and more.

! Step-by-Step Execution Process

? 1. Project Setup and Structure

- When you initialize a new React project using `npx create-react-app my-app`, a new directory named `my-app` is created. 

- This directory is pre-configured with a development environment that includes 
    Babel, Webpack, and a development server. 


    ? --- The structure looks like this: ---

- `node_modules/`: Contains all project dependencies.

- `public/`: Contains the static files like `index.html`.

- `src/`: Contains the source files like `App.js`, `index.js`.

- `package.json`: Manages project dependencies and scripts.

- `.gitignore`: Specifies intentionally untracked files to ignore.

- `README.md`: A markdown file containing project information.


? 2. Transpilation and Compilation: (Babel)

- Babel is a JavaScript compiler that converts ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. 

    --- The key roles that Babel plays: ---

- JSX to JavaScript: Babel transpiles JSX code (the XML-like syntax used in React) into regular JavaScript. 

- It converts tags into `React.createElement` calls which define the object structure of React elements.

- ES6 and Beyond: Converts ES6 code (like arrow functions, constants using `const`) to ES5 to ensure browser compatibility.

? 3. Bundling with Webpack

- Webpack bundles all of the JavaScript, CSS, and images into static assets. 

    --- It has several roles as follows: ---

- Entry Point: Starts from `src/index.js` and recursively builds a dependency graph which includes every module your application needs, then bundles all of these modules into a small number of bundles - often, just one.

- Loaders and Plugins: Uses various loaders and plugins to process different types of files. For instance, `style-loader` and `css-loader` for CSS files, `babel-loader` for JavaScript files to work with Babel.

- Optimization: Minimizes and optimizes the bundle, improving loading time and performance.

? 4. Running Development Server

- When you run `npm start`, it actually triggers `react-scripts start` in your project, 
setting up a development environment and opening up a local server environment where you can test your application in real-time.

- Webpack Dev Server is used in this context. It serves the files from memory (not from disk), and watches for changes to reload the browser automatically.

? 5. Loading in the Browser- vvimp please focus

- Initial HTML Load: The browser loads `public/index.html`. This HTML file includes a div with an id of `root`, which is the mounting point for your React application.

- Script Execution: The bundled JavaScript files are loaded which include your React components and the React library itself.

- React Initialization: React starts by calling `ReactDOM.render()` with the `<App />` component and the DOM element with id `root` as arguments. This is where your React components actually start rendering.


? 6. Virtual DOM and React Component Lifecycle

- Virtual DOM Creation: React creates a virtual DOM when it runs `ReactDOM.render()`. 
- This is a fast, in-memory representation of the actual DOM.

- Reconciliation: When you interact with the application (like clicking a button), event handlers run and may lead to changes in the state of components. 
React then re-renders those components in the virtual DOM. 

- In this reconciliation process the referential integrity is of the Node is checked and it is rerendered only whem the reference of it is changed. 
(This is very imp concept which I will cover in next sessions when we learn the state and state updates- remind me about this later).

- Diffing Algorithm: React uses a diffing algorithm to compare the new virtual DOM with the previous one, computes the minimum number of operations required to update the browser’s DOM.

- Updates: The actual DOM is updated according to the results of the diffing process. 
- This is done to minimize the performance cost associated with direct DOM manipulation.


? 7. Interactions and State Updates

- Handling State: State changes trigger re-renders of components. 
For example, if a user clicks a button that increments a counter, the state update will cause React to re-render the component showing the counter.

- Props and Context: Changes to props or context provided to components also cause re-renders, similar to state changes.

- Batching and Updates: React batches multiple setState calls into a single update for performance reasons. This means React may accumulate several updates into one re-render for efficiency.

? 8. Performance Optimization
- Efficient Updates:

- By updating only parts of the DOM that need to be changed, React minimizes the time and resources needed for updates, which is much more efficient than reloading the entire UI.

- Hooks and Memoization: Modern React features like hooks and memoization help in managing state and optimizing performance by reusing previously computed values.

*/