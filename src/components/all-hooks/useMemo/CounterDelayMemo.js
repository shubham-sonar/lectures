import React, { useMemo, useState } from 'react'

function CounterDelayMemo() {
    const [countOne, setCountOne] = useState(0);
    const [countTwo, setCountTwo] = useState(0);

    const countOneIncrement = () => {
        setCountOne(countOne + 1);
    }

    const countTwoIncrement = () => {
        setCountTwo(countTwo + 1);
    }

    // function isEven() {
    //     console.log('isEven called');
    //     return (countOne % 2) === 0;
    // }

    // ? What happens without the useMemo
    // const isEven = () => {
    //     console.log('isEven called');
    //     for (let i = 1; i < 500000000; i++) { }
    //     return (countOne % 2) === 0;
    // };

    // Here use memo will prevent the reexecution of the isEven if the dependency is same. Although we are calling it on every rerencder the function will not get reexecuted and the previous value will be returned unless we change the dependency. It caches the output of the function.
    // Memoize the outcome of a function.
    
    const isEven = useMemo(() => {
        console.log('isEven called');
        for (let i = 1; i < 500000000; i++) { }
        return (countOne % 2) === 0; 
    }, [countOne]);

    // The useCallback here is useless therefore this function will get re ececuted on every call. Because the task of callback is to prevent reinitializalion not reexecution. Therefore even if we click on counter 2, here the counter one also rerenders and therefore the isEven() will also rerun. But only the refernce will not change. It caches the function/ object / array itself.

    // const isEven = useCallback(() => {
    //     console.log('isEven called');
    //     for (let i = 1; i < 500000000; i++) { }
    //     return (countOne % 2) === 0;
    // }, [countOne]);

    return (
        <div>CounterDelayMemo
            <div>
                <h3> Counter One : {countOne}</h3>
                <button onClick={countOneIncrement}> Increment C1</button>
                <span>{isEven ? ' Even' : ' Odd'}</span>
            </div>
            <div>
                <h3> Counter Two : {countTwo}</h3>
                <button onClick={countTwoIncrement}> Increment C2</button>
            </div>
        </div>
    )
}

export default CounterDelayMemo

/*
? Please note-

useMemo can be used for the objects and functions both. It can help to memoize both the entities.

isEven is called when the counter one is inceremeted to check weather its the even number. Thus whenever we update the counter one we need to run the isEven function. Which is leanthy and memory heavy.

But when we update the counter two, idealy isEven also reexexuted because the counter one is rerendered thus isEven is called again. This makes the update of counter two also very slow thus we need some mechanishm to prevent this ummecessary re execution. So we use the useMemo. 

Here we have memoised the isEven function because when we increment the counter 2 then as the countTwo is the state variable the whole component rerenders thus the counter one component also rerenders. 

The memoize isEven will only re execute if the input to the function means the dependencies change otherwise it will just return the previous values. 

We can memoize any number of functions. But idealy the independent functions must be memoized independently.

*/