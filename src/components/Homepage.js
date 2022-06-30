import '../App.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/training-log-logo.png'
// import ThemeSelector from '../components/ThemeSelector';

function Homepage() {
	const navigate = useNavigate();

	const onLoginClick = () => {
		navigate('/login');
	};

	const onRegisterClick = () => {
		navigate('/register');
	};

	// const onThemeSelectorChange = (e) => {
	// 	console.log(e.target.checked);
	// };

	return (
		<>
			<div className='homepage-container'>
				<img src={Logo} alt='main logo' width='300px'/>
				<h1>Training Log</h1>
				<div className='form-container'>
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
			{/* <ThemeSelector onThemeSelectorChange={onThemeSelectorChange} /> */}
		</>
	);
}

export default Homepage;
