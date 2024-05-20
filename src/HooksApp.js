import './App.css';
import React, { useReducer, useContext } from 'react';
import CDMuseEffect from './components/all-hooks/useEffect/CDMuseEffect';
import ConditionalUseEffect from './components/all-hooks/useEffect/ConditionalUseEffect';
import CWUuseEffect from './components/all-hooks/useEffect/CWUuseEffect';
import DataFetchingUseEffect from './components/all-hooks/useEffect/DataFetchingUseEffect';
import IncorrectDependency from './components/all-hooks/useEffect/IncorrectDependency';
import UseEffectCounter from './components/all-hooks/useEffect/UseEffectCounter';
import Counter from './components/all-hooks/useEffect/UseEffectCounter';
import ComplexReducer from './components/all-hooks/useReducer/ComplexReducer.js';
import MultipleUseReducer from './components/all-hooks/useReducer/MultipleUseReducer.js';
import SimpleUseReducer from './components/all-hooks/useReducer/SimpleUseReducer.js';
// import ComponentB from './components/all-hooks/ReducerAndContext/ComponentB.js';
// import ComponentD from './components/all-hooks/ReducerAndContext/ComponentD.js';
// import ComponentE from './components/all-hooks/ReducerAndContext/ComponentE.js';
// import SimpleFetch from './components/all-hooks/ReducerFetch/SimpleFetch';
// import ComplexFetch from './components/all-hooks/ReducerFetch/ComplexFetch';
// import SimpleUseCallback from './components/all-hooks/useCallback/SimpleUseCallback';
// import CounterDelayMemo from './components/all-hooks/useMemo/CounterDelayMemo';
// import DocumentTitle from './components/all-hooks/CustomHooks/DocumentTitle2';
// import DocumentTitle2 from './components/all-hooks/CustomHooks/DocumentTitle';
// import CustomCounter from './components/all-hooks/CustomHooks/CustomCounter';
// import CustomCounter2 from './components/all-hooks/CustomHooks/CustomCounter2';
// import FocusInput from './components/all-hooks/useRef/FocusInput';
// import UseRefTimer from './components/all-hooks/useRef/UseRefTimer';
import HooksCounter from './components/all-hooks/useState/HooksCounter';
import HooksCounterTwo from './components/all-hooks/useState/HooksCounterTwo';
import ObjectToUsestate from './components/all-hooks/useState/ObjectToUsestate';
import ArrayToUsestate from './components/all-hooks/useState/ArrayToUsestate';
import CompC from './components/all-hooks/useContext/CompC.js';
import ComponentB from './components/all-hooks/ReducerAndContext/ComponentB.js';
import ComponentD from './components/all-hooks/ReducerAndContext/ComponentD.js';
import ComponentE from './components/all-hooks/ReducerAndContext/ComponentE.js';
import GrandParent from './components/all-hooks/PropDrilling/GrandParent.js';
import Child1 from './components/all-hooks/ChildToParent/Child1.js';
import Parent1 from './components/all-hooks/ChildToParent/Parent1.js';
import SimpleFetch from './components/all-hooks/ReducerFetch/SimpleFetch.js';
import ComplexFetch from './components/all-hooks/ReducerFetch/ComplexFetch.js';
import MySimpleFetch from './components/all-hooks/ReducerFetch/MySimpleFetch.js';
import MyComplexReducer from './components/all-hooks/ReducerFetch/MyComplexReducer.js';
import SimpleUseCallback from './components/all-hooks/useCallback/SimpleUseCallback.js';
import CounterDelayMemo from './components/all-hooks/useMemo/CounterDelayMemo.js';
import Optimize from './components/all-hooks/Optimization/Optimize.js';
import FocusInput from './components/all-hooks/useRef/FocusInput.js';
import UseRefTimer from './components/all-hooks/useRef/UseRefTimer.js';
import DocumentTitle2 from './components/all-hooks/CustomHooks/DocumentTitle.js';
import DocumentTitle from './components/all-hooks/CustomHooks/DocumentTitle2.js';
import CustomCounter from './components/all-hooks/CustomHooks/CustomCounter.js';
import { ErrorBoundary } from './components/all-hooks/ErrorBoundry/ErrorBoundry.jsx';
import ErrorCausing from './components/all-hooks/ErrorBoundry/ErrorCausing.jsx';
import DocTitle from './components/all-hooks/MyCustomHooks/DocTitle.jsx';
import CounterUsingHook from './components/all-hooks/MyCustomHooks/CounterUsingHook.js';
// import FocusInput from './components/all-hooks/useRef/FocusInput.js';
// import UseRefTimer from './components/all-hooks/useRef/UseRefTimer.js';
// import CompC from './components/all-hooks/useContext/CompC.js';


export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
export const ReducerContext = React.createContext();

// Below code is for useReducer + useContext example
const initialState = 0;
const reducer = (count, action) => {
  switch (action) {
    case 'increment':
      return count + 1;
    case 'decrement':
      return count - 1;
    case 'reset':
      return initialState;
    default:
      return count;
  }
}


function HooksApp() {
  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">

      {/* 2- Simple Counter using UseState Hook */}
      {/* <HooksCounter /> */}

      {/* 3 - Using the Safe method to change the state */}
      {/* <HooksCounterTwo /> */}

      {/* 4 - Passing the Object as argument to useState() method then manupulating it */}
      {/* <ObjectToUsestate /> */}

      {/* 5 - Passing the Array as argument to useState() method then manupulating it */}
      {/* <ArrayToUsestate /> */}

      {/*  6 - Counter ex using useEffect Hook */}
      {/* <UseEffectCounter /> */}

      {/* 8 - UseEffect -- Conditionaly running the UseEffect method. */}
      {/* <ConditionalUseEffect /> */}

      {/* 9 - useEffect -- Run only once like ComponentDidMount */}
      {/* <CDMuseEffect /> */}

      {/* 10 - useEffect -- Run like a ComponentWillUnmount*/}
      {/* <CWUuseEffect /> */}

      {/* 11 - useEffect -- Caution while passing dependencies. */}
      {/* <IncorrectDependency /> */}

      {/* 12 - useEffect -- Fertching the data using the useEffect and Axios */}
      {/* <DataFetchingUseEffect /> */}

      {/* 13 - useContext -- normal context use and useContext version */}
      <UserContext.Provider value={'Shubham'}>
        <ChannelContext.Provider value={'CodeBuddy'}>
          <CompC />
        </ChannelContext.Provider>
      </UserContext.Provider>

      {/* 14 - useReducer -- using reducer for changing the state and conditional rendering */}
      {/* <SimpleUseReducer /> */}

      {/* 15- useReducer -- Using reducer for complex tasks. Here the state & action are objects */}
      {/* <ComplexReducer /> */}

      {/* 16 - useReducer -- Multiple use reducer implementing the same functionality. */}
      {/* <MultipleUseReducer /> */}

      {/* 17 - useReducer and useContext -- To implement the global state */}
      {/* <ReducerContext.Provider value={{ countState: count, countDispatch: dispatch }}>
        <h3> Counter value : {count}</h3>
        <ComponentB />
        <ComponentD />
        <ComponentE />
        </ReducerContext.Provider> */}

      {/* Props drilling examples */}.
      {/* <GrandParent/> */}

      {/* Child to parent communication */}
      {/* <Parent1/> */}

      {/* 18 - useEffect and useState -- To fetch the data */}
      {/* <SimpleFetch /> */}
      {/* <MySimpleFetch/> */}

      {/* 19 - useReducer and useEffect Fetch -- To fetch the data */}
      {/* <ComplexFetch /> */}
      {/* <MyComplexReducer/> */}

      {/* 20 - useCallback -- Used to optimize the rendering along with React.memo */}
      {/* <SimpleUseCallback /> */}
        {/* <Optimize/> */}


      {/* 21 - useMemo -- The unecessary function execution on Re-rendering is prevented */}
      {/* <CounterDelayMemo /> */}

      {/* 22 - useRef -- Used to accessed the Dom node of an element on the DOM   */}
      {/* <FocusInput /> */}

      {/* 23 - useRef -- Used to accessed the Dom node of an element on the DOM */}
      {/* <UseRefTimer /> */}

      {/* 24 - Creating custom hooks --  Here the document title hook is created for Setting the tiltle */}
      {/* <DocumentTitle /> */}
      {/* <DocumentTitle2 /> */}
      {/* <DocTitle/> */}

      {/*  25 - Creating custom counter operation hook */}
      {/* <CounterUsingHook/> */}
      {/* <CustomCounter /> */}
      {/* <CustomCounter2 /> */}

      {/* 26 - ErrorBoundries and the functional component */}
      <ErrorBoundary>
        <ErrorCausing />
      </ErrorBoundary>

    </div >
  );
}

export default HooksApp;
