import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
export default function HostLayout() {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
}
	return (
		<>
			<nav className='host-nav'>
				<NavLink
					to='/host'
          end
					className={({ isActive }) => (isActive ? activeStyle : null)}
				>
					Dashboard
				</NavLink>
				<NavLink
					to='/host/income'
          end
					className={({ isActive }) => (isActive ? activeStyle : null)}
				>
					Income
				</NavLink>
				<NavLink
					to='/host/reviews'
          end
					className={({ isActive }) => (isActive ? activeStyle : null)}
				>
					Reviews
				</NavLink>
			</nav>
			<Outlet />
		</>
	);
}
