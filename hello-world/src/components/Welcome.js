import React from 'react'

// function Welcome (){
    // return <h1>Curtis Holt : Hello!!!</h1>
// }

const Welcome = (props) => {
    console.log(props)
return <h1>{props.name} aka {props.heroName}: Welcome heroes!</h1> 

// return React.createElement(
// 'div', {className: 'host'}, 
// React.createElement(
// 'h1', null, 'Curtis Holt: Hello'))
}
export default Welcome;