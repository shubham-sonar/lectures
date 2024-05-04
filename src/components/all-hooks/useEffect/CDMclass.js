import React, { Component } from 'react'

export class CDMclass extends Component {
    constructor(props) {
        super(props)

        this.state = {
            x: 0,
            y: 0
        }
    }

    logMousePosition = (e) => {
        this.setState({ x: e.clientX, y: e.clientY })
    }

    componentDidMount() {
        window.addEventListener('mousemove', this.logMousePosition)
    }

    render() {
        return (
            <div>
                <h5>CDMclass</h5>
                <h3> Mouse Pointer Position = X : {this.state.x} & Y : {this.state.y} </h3>
            </div>
        )
    }
}

export default CDMclass

// Here we are binding the event listeneres in componentdidmount because we need to bind the listner only once and not multiple times. Therefore this is the best place to bind the listneres as it runs only once in whole lifecycle of the component.

// There is an alternative for this method in functional components using useEffect. We need to use special technique to make useEffect run only once like cdm. (see CDMuseEffect.js in same folder)        