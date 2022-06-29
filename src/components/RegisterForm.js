import '../App.css';
import axios from 'axios';
import { TextField, Button } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
					if (res.status === 200) {
						navigate('/login');
					}
				})
				.catch((err) => {
					if (err) {
						console.log('error: ', err.response.data);
					}
				});
		}
	};

	const onRegisterFormSubmit = (e) => {
		e.preventDefault();
		registerUser();
	};

	return (
		<div className='register-login-form-container'>
			<h1>Register</h1>
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
		</div>
	);
}

export default RegisterForm;
