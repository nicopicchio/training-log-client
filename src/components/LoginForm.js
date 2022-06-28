import '../App.css';
import { TextField, Button } from '@mui/material';

function LoginForm() {
	return (
		<div className='register-login-form-container'>
			<form className='register-login-form'>
				<TextField label='Email' />
				<TextField label='Password' />
				<Button variant='contained' disableElevation size='large'>
					Login
				</Button>
			</form>
		</div>
	);
}

export default LoginForm;
