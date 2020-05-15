import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton.jsx';
import './Toolbar1.css';
const toolbar = props => {
	return (
			<header className="toolbar">
				<nav className="toolbar_navigation" >

					<div className="toolbar_logo"><a href="/">THESORCETECH</a> </div>
                    <div className="spacer"></div>
					<div className="toolbar_navigation_items">
						<ul>
							<li><a href="/">Projects</a></li>
							<li><a href="/">Services</a></li>
                            <li><a href="/">Contact Us</a></li>
						</ul>
					</div>
					<div>
                        <DrawerToggleButton click={props.drawerClickHandler} />
                    </div>
				 </nav>
			 </header>


			 )
};

export default toolbar;