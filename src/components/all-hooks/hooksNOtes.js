/*
! What are hooks..?
Ans = Hooks are a new feature additiion in react version 16.8 which allow you to use react features without having to write a class.
Eg. state of a component 

? Why hooks..?
1 - In class we needed to Understand how this keyword works in JS.
2 - In classes We need to explicitly bind the event handlers in class componetnts. 
3 - Classes dont minify very well and make the hot reloding very unreliable.
4 - There is no particular way to reuse stateful component logic .
5 - HOC and render props patterns do addetress this problem in classes but this makes the code unreadable and bulky.
6 - There is need to share statefulk logic in a better way between components.
7 - Create components for complex scenatrios such as data fetching and subscribing to events.
8 - Related code is not organizes in one place rather distributed in many life cycle methods.
    Generally we do data fetching in componentdidmount & CDU
    and Eventlisteners are added  in CDM and CWU
9 - Because of the statefull logic we cannot break components into smaller ones.

* Imp points of HOOKS.
16.8 and further, Completely optional, Completely backward compatible, Allows us to reuse the stateful logic, It also alows us to organize the logic inside a component into reusable isolated units.
Hooks dont work inside classes.

! Rules of using the Hooks..?
* only call hooks at the top level
- Dont call hooks inside loops, conditions, or nested functions.

* only call Hooks from react functions
- Call them from within React Functional Components and not just any regular JS funcitons. 


*/