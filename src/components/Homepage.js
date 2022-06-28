import '../App.css';
import { Button } from '@mui/material';

function Homepage() {
	return (
		<form className='register-login-form'>
			<Button variant='contained' disableElevation size='large'>
				Register
			</Button>
			<Button variant='contained' disableElevation size='large'>
				Login
			</Button>
		</form>
	);
}

export default Homepage;
