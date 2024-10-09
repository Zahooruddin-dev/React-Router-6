import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { loginUser } from '../api';
export default function Login() {
	const [loginFormData, setLoginFormData] = React.useState({
		email: '',
		password: '',
	});
	const [status, setStatus] = useState('idle');
	const [error, setError] = useState(null); // Error state
	const location = useLocation();
	const navigate = useNavigate();
	const fromLocation = location.state?.from || '/host'

	function handleSubmit(e) {
		e.preventDefault();
		setStatus('submitting');
		loginUser(loginFormData)
			.then((data) => {
				setError(null);
				localStorage.setItem("loggedin", true)
				navigate("/host",{ replace:true })
			})
			.catch((err) => {
				setError(true);
			})
			.finally(() => {
				setStatus('idle');
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
						{status === 'submitting' 
					? 'Logging In' 
					: 'Log In'
						}
				</button>
			</form>
		</div>
	);
}
