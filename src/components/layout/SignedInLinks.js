import React from 'react'
import {NavLink} from 'react-router-dom'
const SignedInLinks = () => {
	return(
		<ul className="right">
		<li> <NavLink to='/' className='waves-effect waves-light btn-large red lighten-1'>New Project1</NavLink></li>
		<li> <NavLink to='/' className='waves-effect waves-light btn-large red lighten-1'>Log Out</NavLink></li>
		<li> <NavLink to='/' className='btn btn-floating blue lighten-1'>NN</NavLink></li>
		</ul>

		
		)


}
export default SignedInLinks