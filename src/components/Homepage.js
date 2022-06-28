import '../App.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Homepage() {
	const navigate = useNavigate();

	const onLoginClick = () => {
		navigate('/login');
	};

	const onRegisterClick = () => {
		navigate('/register');
	};

	return (
		<div className='homepage-container'>
			<h1>Welcome to Training Log</h1>
			<div className='register-login-form-container'>
				<Button
					onClick={onLoginClick}
					variant='contained'
					disableElevation
					size='large'>
					Login
				</Button>
				<Button
					onClick={onRegisterClick}
					variant='contained'
					disableElevation
					size='large'>
					Register
				</Button>
			</div>
		</div>
	);
}

export default Homepage;
