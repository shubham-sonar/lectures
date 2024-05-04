import './App.css';
import React, { useReducer } from 'react';
// import CompC from './components/all-hooks/useContext/CompC';
import CDMuseEffect from './components/all-hooks/useEffect/CDMuseEffect';
import ConditionalUseEffect from './components/all-hooks/useEffect/ConditionalUseEffect';
import CWUuseEffect from './components/all-hooks/useEffect/CWUuseEffect';
import DataFetchingUseEffect from './components/all-hooks/useEffect/DataFetchingUseEffect';
import IncorrectDependency from './components/all-hooks/useEffect/IncorrectDependency';
import UseEffectCounter from './components/all-hooks/useEffect/UseEffectCounter';
import Counter from './components/all-hooks/useEffect/UseEffectCounter';
// import ComplexReducer from './components/all-hooks/useReducer/ComplexReducer';
// import MultipleUseReducer from './components/all-hooks/useReducer/MultipleUseReducer';
// import SimpleUseReducer from './components/all-hooks/useReducer/SimpleUseReducer';
// import ComponentB from './components/all-hooks/ReducerAndContext/ComponentB';
// import ComponentD from './components/all-hooks/ReducerAndContext/ComponentD';
// import ComponentE from './components/all-hooks/ReducerAndContext/ComponentE';
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


export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
export const ReducerContext = React.createContext();

// Below code is for useReducer + useContext example
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    default:
      return state;
  }
}


function HooksApp() {
  // const [count, dispatch] = useReducer(reducer, initialState)

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
      <DataFetchingUseEffect />
















      {/* 13 - useContext -- normal context use and useContext version */}
      {/* <UserContext.Provider value={'Shubham'}>
        <ChannelContext.Provider value={'CodeSmith'}>
          <CompC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}

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
      .</ReducerContext.Provider> */}

      {/* 18 - useEffect and useState -- To fetch the data */}
      {/* <SimpleFetch /> */}

      {/* 19 - useReducer and useEffect Fetch -- To fetch the data */}
      {/* <ComplexFetch /> */}

      {/* 20 - useCallback -- Used to optimize the rendering along with React.memo */}
      {/* <SimpleUseCallback /> */}

      {/* 21 - useMemo -- The unecessary function execution on Re-rendering is prevented */}
      {/* <CounterDelayMemo /> */}

      {/* 22 - useRef -- Used to accessed the Dom node of an element on the DOM   */}
      {/* <FocusInput /> */}

      {/* 23 - useRef -- Used to accessed the Dom node of an element on the DOM */}
      {/* <UseRefTimer /> */}

      {/* 24 - Creating custom hooks --  Here the document title hook is created for Setting the tiltle */}
      {/* <DocumentTitle />
      <DocumentTitle2 /> */}

      {/*  25 - Creating custom counter operation hook */}
      {/* <CustomCounter />
      <CustomCounter2 /> */}

    </div >
  );
}

export default HooksApp;
