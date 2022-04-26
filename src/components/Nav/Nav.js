import React, { useState } from 'react';
import './nav.css';

const Nav = () => {
	const [activeNav, setActiveNav] = useState(false);
	const [activeNavLinks, setActiveNavLinks] = useState(false);
	const [activeNavBg, setActiveNavBg] = useState(false);
	const onClickMenu = () => {
		setActiveNav(!activeNav);
		setActiveNavLinks(!activeNavLinks);
		setActiveNavBg(!activeNavBg);
	};
	return (
		<nav>
			<div className={`nav ${activeNav ? 'active' : ''}`} onClick={onClickMenu}>
				<div className='nav-bar-one bar'></div>
				<div className='nav-bar-two bar'></div>
				<div className='nav-bar-three bar'></div>
			</div>
			<ul className={`nav-links ${activeNavLinks ? 'active-links' : ''}`}>
				<li>
					<a href='#/'>Home</a>
				</li>
				<li>
					<a href='#/'>Weather Forecast</a>
				</li>
				<li>
					<a href='#/'>Contact Me</a>
				</li>
			</ul>
			<div className={activeNavBg ? 'active-bg' : 'menu-bg'}></div>
		</nav>
	);
};

export default Nav;
