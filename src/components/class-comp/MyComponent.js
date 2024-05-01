class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
    }

    static getDerivedStateFromProps(props, state) {
        // Return new updated state based upon the props
        return null;  // No state update necessary
    }

    componentDidMount() {
        console.log('Component did mount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        // Return true or false
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        // Capture some information from the DOM
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Component did update');
    }

    componentWillUnmount() {
        console.log('Component will unmount');
    }

    render() {
        return <h1>{this.state.counter}</h1>;
    }
}


/*
Functional alternative

import React, { useState, useEffect } from 'react';

function MyComponent(props) {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log('Component did mount');
        
        return () => {
            console.log('Component will unmount');
        };
    }, []);  // Equivalent to componentDidMount and componentWillUnmount

    useEffect(() => {
        console.log('Component did update');
    }, [counter]);  // Runs on counter change, mimicking componentDidUpdate

    return <h1>{counter}</h1>;
}

*/