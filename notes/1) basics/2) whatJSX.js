/*
!----------------------  JSX -----------------

? What is JSX ?
* JSX, or JavaScript XML, is a syntax extension for JavaScript recommended by the React team.
- It helps us to write the HTML code in our JSX file. 
- It looks similar to HTML and is used by React developers to describe what the UI should look like. By using JSX, you can write HTML structures in the same file as JavaScript code.

? How JSX Works
Under the hood, JSX is a syntactic sugar for the React.createElement() function. The JSX code you write is transformed into JavaScript code that React can work with, typically using tools like Babel.

! Powers of JSX

? Enhanced Readability: 
JSX code is much easier to read and write compared to traditional JavaScript DOM code. 
It visually resembles HTML, making it straightforward for developers familiar with HTML.

? Inline Expressions: 
JSX allows developers to embed JavaScript expressions inside the markup for attributes and content, which simplifies the code and improves readability.

? Component Driven: 
JSX supports the definition and usage of React components in a seamless way. This integration of markup and logic in JavaScript enables powerful patterns for building dynamic web apps.

? Type Safety: 
JSX is compiled, so errors like invalid HTML syntax or incorrect usage in expressions are caught during the build time.

! Limitations of JSX

? Requires Compilation:
JSX is not standard JavaScript and needs to be compiled into JavaScript. This compilation step requires setting up and maintaining tools such as Babel and Webpack.

? Learning Curve: 
For new developers, especially those not familiar with HTML or JavaScript, JSX syntax can be confusing and introduce a learning curve.

? Verbose: 
For very dynamic, conditional rendering, JSX can become verbose and harder to follow than traditional templating systems.

? Performance Considerations:
Misuse of JSX, particularly regarding inline functions and objects in JSX properties, can lead to performance issues because of unnecessary re-renders.

? Tooling Dependency:
Since JSX is not native to browsers, it relies heavily on the build tools and environment set up, which can complicate project configurations.

*/