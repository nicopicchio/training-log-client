import { TextField, Button } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';

function AddDatasetForm() {
	const handleSubmitDataset = (e) => {
		e.preventDefault();
		console.log('dataset added');
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
					name='sleep'
					label='Sleep time'
					InputProps={{
						endAdornment: <InputAdornment position='end'>hrs</InputAdornment>,
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
				<TextField type='text' name='training' label='Training Score' />
				<TextField type='text' name='fatigue' label='Fatigue Score' />
				<Button
					type='submit'
					variant='contained'
					disableElevation
					size='large'
					onClick={handleSubmitDataset}>
					Add New Dataset
				</Button>
			</form>
		</div>
	);
}

export default AddDatasetForm;
