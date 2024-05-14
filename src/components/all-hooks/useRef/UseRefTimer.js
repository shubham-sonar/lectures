import { Button, Paper, Stack, Typography, paperClasses } from "@mui/material";
// import { Box } from '@mui/system';
import React, { useEffect, useRef, useState } from "react";
/*

? Hook:
 - `useRef`: Holds a mutable reference to the interval ID, allowing it to persist across re-renders without causing re-renders.
 - `useState`: Manages the timer state, updating the timer value every second.
 - `useEffect`: Sets up the interval to update the timer and cleans up the interval when the component unmounts.

*/

const UseRefTimer = () => {
  // State to manage the timer value
  const [timer, settimer] = useState(0);
  const [timerTwo, settimerTwo] = useState(0);

  // useRef to hold the interval ID, ensuring it persists across re-renders
  const intervalRef = useRef();
  let interval;
  // Log to indicate when the component re-renders
  console.log("The page is rerendered");

  /*
    ? `useEffect` Hook:
     - Sets up an interval to update the timer value every second.
     - Stores the interval ID in `intervalRef.current` to persist it across re-renders.
     - Cleans up the interval when the component unmounts.
    */

  useEffect(() => {
    console.log("Inside the useEffect Hook");

    // Set up the interval and store its ID in intervalRef.current
    intervalRef.current = setInterval(
      () => settimer((previous) => previous + 1),
      1000
    );
    interval = setInterval(() => settimerTwo((previous) => previous + 1), 1000);

    // Log to indicate a new interval has been created
    console.log("New Interval Created");

    // Cleanup function to clear the interval when the component unmounts
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  /*
     - Displays the timer value and a button to clear the timer.
     - Uses Material-UI components for styling.
    */

  return (
    <Stack>
      <Paper
        elevation={5}
        sx={{
          justifySelf: "center",
          alignSelf: "center",
          width: "200px",
          height: "100px",
          m: "20px",
          p: "20px",
        }}
      >
        <Typography> Counter using useRef() Hook </Typography>
        <Typography variant="h5">Timer: {timer}</Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => clearInterval(intervalRef.current)}
        >
          Clear Timer
        </Button>
      </Paper>

      <Paper>
        <Typography> Counter without useRef() Hook </Typography>
        <Typography variant="h5">Timer Two: {timerTwo}</Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => clearInterval(interval)}
        >
          Clear Timer
        </Button>
      </Paper>
    </Stack>
  );
};

export default UseRefTimer;

/*
<Box width={'auto'} height={100} p={10} m={10} display='flex' justifyContent={'center'} direction={'row'} alignSelf={'center'}>
</Box>
*/

/*

! useRef() Hook:

* - The `useRef` hook is used to persist a mutable value across re-renders without causing a re-render when the value changes.
* - It holds a reference to a DOM node or any mutable value. The reference persists throughout the component's lifecycle.
* - This hook returns a mutable ref object which has a `.current` property. This property is initialized to the passed argument (or `null` if no argument is provided).

? Why Not Use a Normal Variable?
* - Normal variables declared with `let` or `const` do not persist across re-renders. They can be used in two ways:

? Method 1:
* - Declare the variable outside the `useEffect` and define it inside the `useEffect`.
* - Eg: `let normalTimer;`
* - Problem: The variable is re-declared with every render, causing the value assigned inside the `useEffect` to be lost. We cannot clear the timer using the same variable because the `useEffect` only runs once when the component mounts.

? Method 2:
* - Declare and define the variable inside the `useEffect` itself.
* - Eg: `let normalTimer = setInterval(...);`
* - Problem: The variable is scoped inside the `useEffect` and inaccessible outside, making it undefined for the outer code.

? Method 3:
* - Use `useRef` to create a reference variable outside the `useEffect` and define it inside the `useEffect`.
* - Assign the interval ID to `intervalRef.current`. This approach ensures the reference variable persists across re-renders and is accessible throughout the component.

 - Eg: `const intervalRef = useRef();`
       `intervalRef.current = setInterval(...);`

* - other way: The reference variable `intervalRef` can be used throughout the program without losing its value, unless the `useEffect` runs again.

? Here it is important to understand that the useRef hook will be used to store the data that persists with every render and the change in the data does not trigger any new rerenders.

? Imp:
* - `useRef` is a powerful hook for directly interacting with DOM elements and persisting values without causing unnecessary re-renders.
* - In the `UseRefTimer` component, it is used to manage a timer, demonstrating its practical application for persistent, mutable values.
*/

