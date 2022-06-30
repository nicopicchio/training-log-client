import '../App.css';
import axios from 'axios';
import { TextField, Button } from '@mui/material';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PasswordIcon from '@mui/icons-material/Password';
// import ThemeSelector from '../components/ThemeSelector';

const emptyForm = {
	email: '',
	password: '',
};

const loginRoute = 'http://localhost:4000/user/login';

function LoginForm({ setLoggedUser }) {
	const [loginData, setLoginData] = useState(emptyForm);
	const [failedLogin, setFailedLogin] = useState(false);
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
					setLoggedUser(res.data.user);
					navigate('/menu');
				}
			})
			.catch((err) => {
				const errorMessage = err.response.data;
				setFailedLogin(errorMessage);
			});
	};

	const onLoginFormSubmit = (e) => {
		e.preventDefault();
		logUser();
	};

	return (
		<div className='form-container'>
			<h1>Login</h1>
			{failedLogin && <p id='failed-login-register-error'>{failedLogin}</p>}
			<form className='register-login-form' onSubmit={onLoginFormSubmit}>
				<TextField
					name='email'
					label='Email'
					onChange={onLoginFormChange}
					required
					InputProps={{
						startAdornment: (
							<InputAdornment position='start'>
								<AccountCircle />
							</InputAdornment>
						),
					}}
				/>
				<TextField
					name='password'
					type='password'
					label='Password'
					onChange={onLoginFormChange}
					required
					InputProps={{
						startAdornment: (
							<InputAdornment position='start'>
								<PasswordIcon />
							</InputAdornment>
						),
					}}
				/>
				<Button type='submit' variant='contained' disableElevation size='large'>
					Login
				</Button>
			</form>
			<p>
				Not registered yet?{' '}
				<Link to='/register' className='links'>
					Register
				</Link>
			</p>
			{/* <ThemeSelector /> */}
		</div>
	);
}

export default LoginForm;
