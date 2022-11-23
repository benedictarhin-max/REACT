import React, {Component} from 'react'

class Message extends Component{
constructor(){
super()
this.state = {
    message: 'Welcome heroes!'
} 
}

changeMessage(){
    this.setState ({
        message: "The fate of the universe hangs in the balance!"
    })
}

    render(){
        return (
        <div>
        <h1>
            {this.state.message}
        </h1>
            <button onClick={()=> this.changeMessage()}>Details</button>
            </div>
    )
}
}

export default Message;

