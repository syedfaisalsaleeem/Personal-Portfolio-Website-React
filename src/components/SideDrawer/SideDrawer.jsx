import React from 'react';
import './SideDrawer.css';
const SideDrawer = props => {
    let drawerClasses='side_drawer';
    if(props.show) {
        drawerClasses='side_drawer open';
    }
    return(
    <nav className={drawerClasses}>
        <ul>
        <li><a href="/">Projects</a></li>
		<li><a href="/">Services</a></li>
        <li><a href="/">Contact Us</a></li>
        </ul>
    </nav>
    );
}
export default SideDrawer;