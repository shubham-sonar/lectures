/*
! Guys FInally you will become a React developer now... The last vimp tech of ur learning... 

! What is React?

React is an open-source JavaScript library used for building user interfaces, particularly for single-page applications where you need a fast interface to improve user experience. 

It allows developers to create large web applications that can change data, without reloading the page.

Its key feature lies in the ability to build components, which are custom, reusable HTML elements with JS logic, that can be nested, managed, and handled independently.

React was first developed by Jordan Walke, a software engineer at Facebook. It was initially released in 2013 and has since become one of the most popular front-end libraries in use today.

Initially used class based components and now we use functional components.

! Why React?

1. Component-Based Architecture: React’s component-based structure allows developers to build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.

2. Learn Once, Write Anywhere: React’s design doesn’t make assumptions about the rest of your technology stack, which means it’s easy to develop new features in React without rewriting existing code.

3. Declarative Views: React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable, simpler to understand, and easier to debug.

4. Rich Ecosystem: React is widely used, and as a result, has a vast ecosystem of documentation, libraries, tools, and more that can help developers create applications quickly.

5. Strong Community: With strong support from Facebook and a massive community of developers, React is consistently being improved with new features, performance improvements, and extensions.

! What is Virtual DOM?

The Virtual DOM (VDOM) is a programming concept where a "virtual" representation of a UI is kept in memory and synced with the "real" DOM by a library such as ReactDOM. This model is built primarily for performance reasons and is used as a lightweight copy of the actual DOM.

! Why Virtual DOM is Useful?

1. Efficiency: The Virtual DOM allows React to minimize the number of costly DOM manipulations by batching updates and applying them asynchronously to the real DOM. This process, known as reconciliation, involves comparing the current page structure to the proposed page structure and making only the necessary changes.

2. No Direct DOM Manipulation: React controls the rendering flow to the DOM, and programmers do not worry about how and when to render or re-render the DOM. They just need to declare the state in the UI based on the user’s interaction or other changes in state data.

3. Simplified Programming Model: Since the DOM updates are handled by React itself, developers can focus more on the application's state and its behavior rather than worrying about rendering logic.

4. Increased Performance: By minimizing direct DOM manipulation, React increases application performance and makes user interfaces feel more responsive.

5. Reusable Components: Since the Virtual DOM system is entirely implemented in JavaScript, it can be used on different environments (browsers, servers, and native platforms) thus supporting the “Learn Once, Write Anywhere” philosophy.

*/

/*

? Running React ?

? 1. Using CodeSandbox
CodeSandbox is an online code editor tailored for web applications, 
Guys its Best for trying out React and sharing projects without any downloads or installation.

* Steps to use React in CodeSandbox:
Open CodeSandbox: Go to CodeSandbox.io.

Create New Sandbox: Click on "Create Sandbox" or the "+" button in the dashboard area.

Choose a React Template: Select the "React" template from the list of new templates. This will set up 

Start Coding: The template provides you with a sample project where you can start modifying the code immediately. 
It typically includes files like App.js, index.js, and styles.

Instant Preview and Sharing: As you code, the results are instantly available in the preview window. You can also share your project by simply sharing the URL of your sandbox.

? 2. Using npx with Create React App

Create React App (CRA) is a comfortable environment to start building a new single-page React application. 
It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production.

? Steps to create a React app with npx:

* Setup: Ensure that Node.js is installed on your computer. If not, download and install it from nodejs.org.

* Create a New Project:

* Open your terminal theen Run the following command to create a new React app: 

npx create-react-app my-app

- This command creates a directory called my-app with all the initial setup and dependencies.
Navigate into your Project:

* Change directory to your new app:

cd my-app

* Start the Development Server:

npm start

-This runs the app in development mode. Open http://localhost:3000 to view it in the browser. The page will reload if you make edits.

*/