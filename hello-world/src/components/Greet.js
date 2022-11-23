import React from 'react'
import App from '../App'



const Greet = props => {
const {name, heroName, children} = props
return (
<div>
<h1>Hello {name} a.k.a. {heroName}</h1>
{children}
</div>
)
}
export default Greet; 