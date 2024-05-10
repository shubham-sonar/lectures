/*
! useCallback() 

- The `useCallback` hook for optimizing callback functions.
- Avoids unnecessary re-rendering of child components when their props don't change.

? Why Use `useCallback`?
* - It returns a memoized version of a function that only changes if a dependency changes.
* - Useful for passing stable callback functions to child components, preventing them from being recreated on each render.

? Hooks:
* - `useCallback`: Memoizes the increment and increase functions, reducing their unnecessary re-creation.
* - `useState`: Manages local component states for age and salary values.

*/

import React, { useCallback, useState } from 'react'; // Import React and hooks
import Title from './Title'; // Custom component to display a title
import Buttons from './Buttons'; // Custom component to display a button
import Count from './Count'; // Custom component to display a label and count

// Main functional component definition
function SimpleUseCallback() {
    // Component's state variables
    const [age, setAge] = useState(25); // Manages the age value
    const [salary, setSalary] = useState(300000); // Manages the salary value

    /*
    ? `incrementAge` Callback:
    * - Memoized function to increment age.
    * - Dependency array includes `age` to update the function when age changes.
    */

    // const incrementAge = useCallback(() => {
    //     setAge(age + 1);
    // }, [age]);
   
    const incrementAge = () => {
        setAge(age + 1);
    };

    /*
    ? `increaseSalary` Callback:
    * - Memoized function to increase salary.
    * - Dependency array includes `salary` to update the function when salary changes.
    */
   
    // const increaseSalary = useCallback(() => {
    //     setSalary(salary + 10000);
    // }, [salary]);

    const increaseSalary = () => {
        setSalary(salary + 10000);
    };
    
    /*
    ? Rendering -
    * - Displays the `Title`, `Count`, and `Buttons` components.
    * - Passes memoized functions as handlers to the `Buttons` component to avoid unnecessary re-renders.
    */
    return (
        <div>
            <h3>SimpleUseCallback</h3> {/* Header title */}
            <Title /> {/* Static component for displaying the title */}

            {/* Display age count and an increment button */}
            <Count text={'Age'} count={age} />
            <Buttons handler={incrementAge}> Increment Age </Buttons>
 
            {/* Display salary count and an increase button */}
            <Count text={'Salary'} count={salary} />
            <Buttons handler={increaseSalary}> Increase Salary </Buttons>

        </div>
    );
}

export default SimpleUseCallback;

/*
? Imp:
* - `useCallback` helps to memoize callback functions, preventing unnecessary re-renders.
* - Child components (like `Buttons` and `Count`) are not re-rendered unnecessarily because they receive stable references to their handlers.
* - Effective use of dependency arrays ensures callbacks are only recreated when their dependencies change.
* - This optimization is specially beneficial in components with many children or costly re-rendering logic.
*/
