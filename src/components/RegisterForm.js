import '../App.css';
import { TextField, Button } from '@mui/material';

function RegisterForm() {
	return (
		<div className='register-login-form-container'>
			<h1>Register</h1>
			<form className='register-login-form'>
				<TextField label='Name' />
				<TextField label='Surname' />
				<TextField label='Email' />
				<TextField label='Password' />
				<TextField label='Confirm password' />
				<Button variant='contained' disableElevation size='large'>
					Register
				</Button>
			</form>
		</div>
	);
}

export default RegisterForm;
