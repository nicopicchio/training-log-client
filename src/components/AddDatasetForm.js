import { TextField, Button } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react'

function AddDatasetForm() {
	const [dataset, setDataset] = useState(null)
	const navigate = useNavigate();

	const onDatasetFormChange = (e) => {
		const { name, value } = e.target;
		setDataset({ ...dataset, [name]: value });
	};

	const handleSubmitDataset = (e) => {
		e.preventDefault();
		
	};
	const handleCancel = (e) => {
		e.preventDefault();
		navigate('/menu');
	};
	return (
		<div className='form-container'>
			<h1>New Dataset</h1>
			<form className='register-login-form' onSubmit={handleSubmitDataset}>
				<TextField
					type='text'
					name='restHR'
					label='Resting HR'
					InputProps={{
						endAdornment: <InputAdornment position='end'>bpm</InputAdornment>,
					}}
				/>
				<TextField
					type='text'
					name='weight'
					label='Weight'
					InputProps={{
						endAdornment: <InputAdornment position='end'>kg</InputAdornment>,
					}}
				/>
				<TextField
					type='text'
					name='sleep'
					label='Sleep'
					InputProps={{
						endAdornment: <InputAdornment position='end'>hrs</InputAdornment>,
					}}
				/>
				<TextField
					type='text'
					name='fatigue'
					label='Fatigue Score'
					InputProps={{
						endAdornment: <InputAdornment position='end'>0-3</InputAdornment>,
					}}
				/>
				<Button
					type='submit'
					variant='contained'
					disableElevation
					size='large'
					color='success'
					onClick={handleSubmitDataset}>
					Add New Dataset
				</Button>
				<Button
					type='submit'
					variant='contained'
					disableElevation
					size='large'
					color='error'
					onClick={handleCancel}>
					Cancel
				</Button>
			</form>
		</div>
	);
}

export default AddDatasetForm;
