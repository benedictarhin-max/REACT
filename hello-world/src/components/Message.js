import React, {Component} from 'react'

class Message extends Component{
    constructor(){
super()
this.state = {
        message : "You are the only ones who can stop him."
}
    }

    changeMessage(){
        this.setState({
            message: "His name is Dax Novu!"
        })
    }

    render(){
        return (
        <div>
        <h1>
            {this.state.message}
            </h1>
            <button onClick = {()=> this.changeMessage()}>Details</button>
            </div>
    )
}
}

export default Message;

