import '../App.css';
import axios from 'axios';
import { TextField, Button } from '@mui/material';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import ThemeSelector from '../components/ThemeSelector';

const emptyForm = {
	firstName: '',
	lastName: '',
	email: '',
	password: '',
	passwordMatch: '',
};

const registerRoute = 'http://localhost:4000/user/register';

function RegisterForm() {
	const [registerData, setRegisterData] = useState(emptyForm);
	const [failedRegister, setFailedRegister] = useState(false);
	const navigate = useNavigate();

	const onRegisterFormChange = (e) => {
		const { name, value } = e.target;
		setRegisterData({ ...registerData, [name]: value });
	};

	const registerUser = () => {
		if (registerData.password === registerData.passwordMatch) {
			axios
				.post(registerRoute, {
					firstName: registerData.firstName,
					lastName: registerData.lastName,
					email: registerData.email,
					password: registerData.password,
				})
				.then((res) => {
					if (res.status === 201) {
						navigate('/login');
					}
				})
				.catch((err) => {
					const errorMessage = err.response.data;
					setFailedRegister(errorMessage);
				});
		}
	};

	const onRegisterFormSubmit = (e) => {
		e.preventDefault();
		registerUser();
	};

	return (
		<div className='form-container'>
			<h1>Register</h1>
			{failedRegister && (
				<p id='failed-login-register-error'>{failedRegister}</p>
			)}
			<form className='register-login-form' onSubmit={onRegisterFormSubmit}>
				<TextField
					type='text'
					name='firstName'
					label='First Name'
					onChange={onRegisterFormChange}
					required
				/>
				<TextField
					type='text'
					name='lastName'
					label='Last Name'
					onChange={onRegisterFormChange}
					required
				/>
				<TextField
					type='email'
					name='email'
					label='Email'
					onChange={onRegisterFormChange}
					required
				/>
				<TextField
					name='password'
					type='password'
					label='Password'
					onChange={onRegisterFormChange}
					required
				/>
				<TextField
					name='passwordMatch'
					type='password'
					label='Confirm password'
					onChange={onRegisterFormChange}
					required
				/>
				<Button type='submit' variant='contained' disableElevation size='large'>
					Register
				</Button>
			</form>
			<p>
				Already registered?{' '}
				<Link to='/login' className='links'>
					Login
				</Link>
			</p>
			{/* <ThemeSelector /> */}
		</div>
	);
}

export default RegisterForm;
