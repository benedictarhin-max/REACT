import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
addOne(){
    // this.setState({
    //     count: this.state.count + 1
    // },
    // console.log('Callback value', this.state.count)
    // )

    this.setState((prevState) =>({
count: prevState.count + 1  
    }))
    console.log(this.state.count)
}

addThree(){
this.addOne() 
this.addOne()    
this.addOne()    

}

  render() {
    return (
    <div>
<div>Counter: {this.state.count}</div>
    <button onClick={()=> this.addThree()}>Click Me!</button>
    </div>
      
    )
  }
}

export default Counter