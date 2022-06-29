import '../App.css';
import axios from 'axios';
import { TextField, Button } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const emptyForm = {
	email: '',
	password: '',
};

// const failedLoginMessage = 'Invalid email and/or password!';

const loginRoute = 'http://localhost:4000/user/login';

function LoginForm({ setLoggedUser }) {
	const [loginData, setLoginData] = useState(emptyForm);
	const navigate = useNavigate();

	const onLoginFormChange = (e) => {
		const { name, value } = e.target;
		setLoginData({ ...loginData, [name]: value });
	};

	const logUser = () => {
		axios
			.post(loginRoute, {
				email: loginData.email,
				password: loginData.password,
			})
			.then((res) => {
				if (res.status === 200) {
					localStorage.setItem('token', res.data.token);
					setLoggedUser(res.data.user.firstName);
					navigate('/menu');
				}
			})
			.catch((err) => {
				if (err) {
					console.log('error: ', err);
				}
			});
	};

	const onLoginFormSubmit = (e) => {
		e.preventDefault();
		logUser();
	};

	return (
		<div className='register-login-form-container'>
			<h1>Login</h1>
			<form className='register-login-form' onSubmit={onLoginFormSubmit}>
				<TextField name='email' label='Email' onChange={onLoginFormChange} />
				<TextField
					name='password'
					type='password'
					label='Password'
					onChange={onLoginFormChange}
				/>
				<Button type='submit' variant='contained' disableElevation size='large'>
					Login
				</Button>
			</form>
		</div>
	);
}

export default LoginForm;
