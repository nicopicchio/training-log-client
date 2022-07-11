import '../App.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Menu({ loggedUser }) {
	const navigate = useNavigate();

	const handleAddDatasetBtn = () => {
		navigate('/add-dataset');
	};

	const handleGoToDashboardBtn = () => {
		navigate('/dashboard')
	}

	return (
		<>
			<div className='main-menu-container'>
				<h1>Hello, {loggedUser.firstName}</h1>
				<Button
					variant='contained'
					disableElevation
					size='large'
					onClick={handleAddDatasetBtn}>
					Add dataset
				</Button>
				<Button variant='contained' disableElevation size='large' onClick={handleGoToDashboardBtn}>
					Go to Dashboard
				</Button>
			</div>
		</>
	);
}

export default Menu;
