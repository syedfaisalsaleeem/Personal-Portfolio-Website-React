import React from 'react';
import './Footer.css';
import logof from './12.png'
const Footer = props => {
	return (
			<header className="footer"  style={{transform:props.call?"translateX(0%)":"translateX(-100%)",transition:"transform 1s ease-in-out"}}>
				<div className="footer_navigation" >

					<div className="footer_logo"><a href="/"><input type="image" className="logof" src={logof}/><h3>TheSorceTech</h3></a>
					<div className="copy_right"><p>Copyright © THESORCETECH 2020. All Rights Reserved.</p></div>
					
					 </div>
					<div className="spacer"></div>
					<div className="footer_navigation_items">
						<ul>
							<li><a href="/">Karachi,Pakistan</a></li>
							<li><a href="/">THESORCETECH@gmail.com</a></li>
						</ul>
					</div>
					<div className="spacer"></div>
					<div className="footer_navigation_items1">
						<ul>
							<li><a href="#" className="fa fa-facebook"></a></li>
							<li><a href="#" className="fa fa-twitter"></a></li>
                            <li><a href="#" className="fa fa-linkedin"></a></li>
						</ul>
					</div>
				 </div>
			 </header>


			 )
};

export default Footer;