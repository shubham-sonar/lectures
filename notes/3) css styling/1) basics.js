/*

! Inline Styling

Inline styling involves directly setting style properties on React elements using a style attribute. This approach is straightforward and quick for minor style adjustments but lacks some of the capabilities of traditional CSS, such as pseudo-classes or animations.

? Advantages:

Quick and easy to add without requiring separate files.
Useful for dynamic styles that depend on JavaScript logic.

? Disadvantages:

Doesn't support pseudo-classes, animations, or media queries.
Can lead to cluttered JSX if overused.

! CSS Stylesheets
Using traditional CSS stylesheets is the most familiar approach for those with a background in web development. 
Styles are defined in separate .css files and then imported into component files.

? Advantages:

Familiar syntax and full CSS capability, including media queries, animations, and pseudo-classes.
Styles are reusable across multiple components.

? Disadvantages:

Global scope by default, which can lead to style conflicts unless carefully managed.

! CSS Modules

CSS Modules provide a way to write CSS that is scoped locally to the component rather than globally.
This means that class names and animation names are scoped by default to the component in which they are used.

? Advantages:

Avoids style conflicts by automatically scoping styles to the component.
Maintains the advantages of CSS (such as using media queries and keyframes) while encapsulating the styles.

? Disadvantages:

Requires setup in webpack or other build tools (though this is often included by default in tools like Create React App).

*/