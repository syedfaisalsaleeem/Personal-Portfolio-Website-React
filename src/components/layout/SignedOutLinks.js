import React from 'react'
import {NavLink} from 'react-router-dom'
const SignedOutLinks = () => {
	return(
		<ul className="right">
		<li> <NavLink to='/' className='waves-effect waves-light btn-large red lighten-1'>Signup</NavLink></li>
		<li> <NavLink to='/' className='waves-effect waves-light btn-large red lighten-1'>Login</NavLink></li>
		</ul>

		
		)


}
export default SignedOutLinks