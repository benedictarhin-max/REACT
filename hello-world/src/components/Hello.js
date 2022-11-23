import React, {Component} from 'react'

class Hello extends Component{
 render(){
    const {name, heroName, children} = this.props
return (
    <div>
        <h1>Hello {name} a.k.a. {heroName}</h1>
        {children}
    </div>
)

 }
}

export default Hello