import React from 'react'
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
const Navbar1 = () => {
	return(
		<nav className="nav-wrapper black darken-1">
			<div className="container">
				<Link to='/' className="brand-logo"> TheSorceTech 
				</Link>
				<SignedInLinks />
				<SignedOutLinks />
			</div>
		</nav>		

		
		)


}

export default Navbar1