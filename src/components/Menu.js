import '../App.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Menu({ loggedUser }) {
	const navigate = useNavigate();

	const handleAddDataset = () => {
		navigate('/add-dataset');
	};

	return (
		<>
			<div className='main-menu-container'>
				<h1>Hello, {loggedUser}</h1>
				<Button
					variant='contained'
					disableElevation
					size='large'
					onClick={handleAddDataset}>
					Add dataset
				</Button>
				<Button variant='contained' disableElevation size='large'>
					Go to Dashboard
				</Button>
			</div>
		</>
	);
}

export default Menu;
