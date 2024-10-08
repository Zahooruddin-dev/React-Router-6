import React from 'react';
import { Outlet } from 'react-router-dom';
export default function Dashboard() {
	return (
		<>
			<Outlet />
			<h1>Thisn is Dashboard page</h1>
		</>
	);
}
