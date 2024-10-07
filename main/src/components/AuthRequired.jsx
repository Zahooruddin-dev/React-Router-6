import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
export default function AuthRequired() {
	const authentication = false;
	if (!authentication) {
		return (
			<Navigate
       to={'/login'}
       state={{message: 'You must login first!' }} />
		);
	}
	if (authentication) {
		return <Outlet />;
	}
}
