import React from 'react'

// function Welcome (){
    // return <h1>Curtis Holt : Hello!!!</h1>
// }

const Welcome = (props) => {
    const {name, heroName, children} = props
return (
<div>
<h1>{name} a.k.a. {heroName}</h1>
{children}
</div>
)
}
// return React.createElement(
// 'div', {className: 'host'}, 
// React.createElement(
// 'h1', null, 'Curtis Holt: Hello'))

export default Welcome;