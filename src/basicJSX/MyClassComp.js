import React, { Component } from "react";


class MyClassComp extends Component{
    constructor(props){
        super(props);
        this.state = {
            message : "Hey How are you doing?"
        };
    }

    render(){
        return(
            <div>
                <h1> Class Based Component </h1>
                {this.state.message}
            </div>
        )
    }
}

export default MyClassComp