import '../App.css';
import { Button } from '@mui/material';

function Menu({ loggedUser }) {
	return (
		<>
			<div className='main-menu-container'>
				<h1>Hello, {loggedUser}</h1>
				<Button variant='contained' disableElevation size='large'>
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
