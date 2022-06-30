import { TextField, Button } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { useNavigate } from 'react-router-dom';

function AddDatasetForm() {
	const navigate = useNavigate();
	const handleSubmitDataset = (e) => {
		e.preventDefault();
		console.log('dataset added');
	};
	const handleCancel = (e) => {
		e.preventDefault();
		navigate('/menu');
	};
	return (
		<div className='form-container'>
			<h1>New Dataset</h1>
			<form className='register-login-form'>
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
					name='training'
					label='Training Score'
					InputProps={{
						endAdornment: <InputAdornment position='end'>0-3</InputAdornment>,
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
