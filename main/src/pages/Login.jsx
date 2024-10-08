import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { loginUser } from '../api';
export default function Login() {
	const [loginFormData, setLoginFormData] = React.useState({
		email: '',
		password: '',
	});
	const location = useLocation();
	const [status, setStatus] = useState('idle');
	const [error, setError] = useState(null); // Error state

	function handleSubmit(e) {
		e.preventDefault();
		setStatus('submitting');
		loginUser(loginFormData)
			.then((data) => {
				console.log(data);
				setStatus('idle');
			})
			.catch((err) => {
				console.log(err);
				setStatus('idle');
				setError(true);
			});
	}

	function handleChange(e) {
		const { name, value } = e.target;
		setLoginFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	}

	return (
		<div className='login-container'>
			{location.state?.message && (
				<h3 className='login-first'>{location.state.message}</h3>
			)}
			<h1>Sign in to your account</h1>
			{error && (
				<p className='error-message'>
					{error.message || 'An unknown error occurred.'}
				</p>
			)}

			<form onSubmit={handleSubmit} className='login-form'>
				<input
					name='email'
					onChange={handleChange}
					type='email'
					placeholder='Email address'
					value={loginFormData.email}
				/>
				<input
					name='password'
					onChange={handleChange}
					type='password'
					placeholder='Password'
					value={loginFormData.password}
				/>
				<button disabled={status === 'submitting'}>
					{status === 'submitting' ? 'Logging In' : 'Log In'}
				</button>
			</form>
		</div>
	);
}
