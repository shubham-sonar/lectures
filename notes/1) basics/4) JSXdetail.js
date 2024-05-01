/*
!--  JSX is the best friend of React. Without it its not easy for React to live happily. --

- JSX, or JavaScript XML, allows you to write HTML-like code directly within JavaScript. 

- It's a syntactic sugar for `React.createElement()` function calls that makes it easier to write React applications.

! Detailed JSX exxplanation

? 1. JSX Basics
  
    - Syntax Similarityy to HTML: JSX syntax is similar to HTML. This visual similarity makes it easier for developers familiar with HTML to start using React.
   
    - Embedding Expresssions: You can embed JavaScript expressions inside JSX by wrapping them in curly braces (`{}`).
   
    - Example:  
     const name = 'React Learner';
     const element = <h1>Hello, {name}</h1>;
     
- To see your JSX code on the screen you will follow the steps below from bottom to top.

    index.js
    <App/>


     App
     <Parent/>
     <Child/>


     Parent
     <Child/>  // This means child()


     Child
     function(){
      <div> </div>
     return( <div> </div> )
     }

? 2. JSX is an Expression

   - Composability: After compilation, JSX expressions become regular JavaScript function calls and evaluate to JavaScript objects.

   -VVVIMP - Usage in Statements: This means you can use JSX inside `if` statements, `for` loops, assign it to variables, accept it as arguments, and return it from functions.

   - Example:
     function getGreeting(user) {
       if (user) {
         return <h1>Hello, {user.name}!</h1>;
       }
       return <h1>Hello, Stranger.</h1>;
     }
     

? 3. Specifying Attributes with JSX
   - Static Attributes: You can use quotes to specify string literals as attributes.
   - Dynamic Attributes: Use curly braces to embed a JavaScript expression in an attribute.
  
   - Example:   
     const element = <img src= {user.avatarUrl}> </img>;
     

? 4. Using JSX for Specifying Children

   - Tags Without Children: If a tag is empty, you can close it immediately with `/>`.
   - Nested JSX: JSX tags may contain children.

   - Example:     
     const element = (
       <div>
         <h1>Welcome!</h1>
         <input />
         <h2>Good to see you here, {name}.</h2>
       </div>
     );
     

? 5. JSX Prevents Injection Attacks

   - Security: JSX automatically escapes any values embedded in it before rendering them. This behavior prevents XSS (cross-site scripting) attacks.

   - Example:      
     const title = response.potentiallyMaliciousInput;
     // This is safe:
     const element = <h1>{title}</h1>;
     

? 6. JSX Represents Objects

   - Babel Compilation: Babel compiles JSX down to `React.createElement()` calls.
   - These Calls Return Objects: A JSX tag translates into an object representing the UI component.

? 7. Using Dot Notation for JSX Type
  
    - Namespaced Components: You can use dot notation in JSX to refer to React components that are properties on an object.

   - Example: 
     const MyComponents = {
      // This method of the object will be the Component.
      DatePicker: function DatePicker(props) {
             return <div>Imagine a {props.color} datepicker here.</div>;
       }
     };

     const element = <MyComponents.DatePicker color="blue" />;
     
     ----------------------------------------------
    This is the React component

     function DatePicker(props){
      console.log(props.color);
     }

     <DatePicker color="blue" userName="Shubham"/>
    -----------------------------------------------
    In Background the component call resembles to the function call in the normal JS.

     DatePicker({
      color : "blue",
      userName:"Shubham"
     })
     
? 8. User-Defined Components Must Be Capitalized
 
    - Naming Convention: When an element type starts with a lowercase letter, React treats it as a built-in component (like `<div>` or `<span>`) and passes the resulting string to HTML. For user-defined components, you must use uppercase.

   - Example: 
     // Wrong! This is a HTML tag because 'hello' is lowercase.
     const element = <hello userName="Hello" />;
     // Correct! Capitalized types indicate a component.
     const HelloComponent = <Hello userName="Hello" />;
     

? 9. JSX Transpilation Example

   - Babel Output: Here's how Babel translates JSX into native JavaScript.

   - Input JSX:     
     const element = <h1 className="greeting">Hello, world!</h1>;
     
   - Output JavaScript:
   React.createElement(T,A,C);

     const element = React.createElement( 
       'h1',
       {className: 'greeting'},
       'Hello, world!'
     );
     

? 10. Conditionals in JSX

    - Inline If with Logical `&&` Operator: You can embed any expressions that evaluate to true or false directly within JSX by using the `&&` operator.

    - Example:
      
      const messages = ['React', 'Re: React', 'Re:Re: React'];
      const mailbox = (
        <div>
          <h1>Hello!</h1>
          {messages.length > 0 &&
            <h2>
              You have {messages.length} unread messages.
            </h2>
          }
        </div>
      );

? 11. Ternary Operator (Conditional Rendering)
  
    - Ternary/Conditional Operator: This is useful for conditionally including an element.
    
    - Example:  
      const isLoggedIn = true;
      const userGreeting = (
        <h1>Welcome back!</h1>
      );
      const guestGreeting = (
        <h1>Please sign up.</h1>
      );
      const greeting = isLoggedIn ? userGreeting : guestGreeting;
      

? 12. Attributes with JSX
  
    - Spread Attributes: You can spread the properties of an object into JSX as attributes using the spread (`...`) operator.
    
    - Example:  
      const props = {firstName: 'Ben', lastName: 'Hector'};
      const greeting = <Greeting {...props} />;
      By writing above code you get below output
      const greeting = <Greeting firstName= "Ben" lastName="Hector" />;

      

? 13. JSX for Loops
  
    - Mapping Over Arrays: Often used to transform an array of data into an array of JSX elements.
    
    - Example:  
      const todos = ['Finish homework', 'Clean room', 'Write blog'];
    
    - Normally we do this using the traditional method.
      const todoList = (
        <ul>
          <li> {todos[0]}</li>
          <li> {todos[1]}</li>
          <li> {todos[2]}</li>
        </ul>
      );
      
    - Simple way to do it and make it dynamic using the map or foreach

      const todoList = (
        <ul>
          {todos.map((todo, index) => (
            <li key={index}> {todo} </li>
          ))}
        </ul>
      );
      
*/

// * ------------------------------------------------------------------------------------- *

/*
! Using Loops in JSX

? 'for' Loops and JSX: 

- Unlike array `map()` function, traditional `for` loops are not directly used within JSX because JSX is a declarative syntax and must return a single element. 

- If you need to use a `for` loop to generate JSX content, you should do the computation outside the return statement or JSX block.

    - Example:
      
      let items = [];
      for (let i = 0; i < 5; i++) {
        items.push(<li key={i}>Item {i}</li>);
      }

      function App() {
        return <ul> {items} </ul>;
      }
      

! Variables, Strings, and HTML Elements in JSX

? Distinction in JSX:
 
* Variables: 

- Variables in JSX can hold any type of value that JavaScript supports, including numbers, strings, arrays, objects, functions, and JSX elements themselves. 

- When you use a variable in JSX, it gets evaluated and replaced by its actual value.
   
* Strings: 

- To incorporate strings directly in JSX, you can put them in curly braces or directly inside tags as text nodes. 

- In JSX, `{}` is used to embed JavaScript expressions, and strings are JavaScript expressions.
   
* HTML Elements: 

- HTML-like JSX tags (e.g., `<div>`, `<span>`, `<a>`) are transformed into React elements which are objects describing what should appear on the screen. These are distinctly different from strings.
   
- Example:
     
     const name = "React";  // Variable
     const greeting = <h1>Hello, {name}</h1>;  // JSX using a variable

     function App() {
       return (
         <div>
           {greeting}  // Embedding JSX variable
           <p>{"This is a string inside curly braces"}</p>  // Embedding string
           <p>This is also a string, but directly inside a paragraph tag.</p>
         </div>
       );
     }
     

! JSX Capabilities in Functional Components

? Conditional Rendering:
 
- Besides using ternary operators and logical `&&`, conditional rendering in JSX can also be achieved using `null` values for conditional outputs. This is particularly useful in `&&` conditions where you might not want any output if a condition fails.
   
- Example:
    function MyComponent({ shouldShow }) {
       return (
         <div>
           {shouldShow && <p>Only shown if `shouldShow` is true</p>}
           {!shouldShow && null}
         </div>
       );
     }
     

? Attributes and Props:
 
- Dynamic Class Names: You can dynamically set class names based on conditions or computations.

- Example:
     function Button({ isActive }) {
       const className = isActive ? 'active' : 'inactive';
       return <button className={className}>Click me!</button>;
     }
     

? Event Handling:
  
- JSX allows you to directly assign event handlers using camelCase property names such as `onClick`, `onHover`, etc. These handlers are set directly on components or HTML elements and can reference functions defined in JavaScript.
   
- Example:
     function Counter() {
       const [count, setCount] = useState(0);

       function handleClick() {    setCount(count + 1);    }

       return <button onClick={handleClick}>Increment: {count}</button>;
     }
     

? Fragments:
   
- Sometimes you need to return multiple elements from a component. JSX fragments allow you to group a list of children without adding extra nodes to the DOM. This is done using `<React.Fragment>` or the shorthand `<>` syntax.
   

ParentTable(){
  return(
    <table>
      <ChildTable/>
    </table>
  )
}

- Example:
    function ChildTable() {
       return (
         <>
           <tr>Row 1</tr>
           <tr>Row 2</tr>
         </>
       );
     }
     

? JavaScript Expressions as Props:
 
- You can pass any JavaScript expression as a prop, using curly braces to wrap the expression.

- Example:
     function Profile(props) {
       return <img src={props.user.imageUrl} alt={props.user.name} />;
     }

     const user = { imageUrl: 'url-to-image', name: 'React User' };
     function App() {
       return <Profile user={user}"} />;
     }
     
*/