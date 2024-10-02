import React from 'react';
import { NavLink } from 'react-router-dom';
export default function Header() {
  const activeStyle={
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616'
  }
	return (
		<header>
			<NavLink className='site-logo' to='/'>
				#VanLife
			</NavLink>
			<nav>
				<NavLink
					to='/host'
					className={({ isActive }) => (isActive ? activeStyle : null)}
				>
					Home
				</NavLink>
				<NavLink
					to='/about'
					className={({ isActive }) => (isActive ? activeStyle : null)}
				>
					About
				</NavLink>
				<NavLink
					to='/vans'
					className={({ isActive }) => (isActive ? activeStyle : null)}
				>
					Vans
				</NavLink>
			</nav>
		</header>
	);
}
