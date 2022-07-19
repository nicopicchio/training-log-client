import { TextField, Button } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const addDatasetRoute = 'http://localhost:4000/data';

function AddDatasetForm({ loggedUser }) {
	const [dataset, setDataset] = useState(null);
	const navigate = useNavigate();

	const onDatasetFormChange = (e) => {
		const { name, value } = e.target;
		setDataset({ ...dataset, [name]: value });
	};

	const addDataset = () => {
		axios
			.patch(
				addDatasetRoute,
				{
					userId: loggedUser._id,
					restHR: dataset.restHR,
					weight: dataset.weight,
					sleep: dataset.sleep,
					fatigue: dataset.fatigue,
				},
				{
					headers: {
						Authorization: `Bearer ${localStorage.getItem('token')}`,
					},
				}
			)
			.then((res) => {
				console.log(res);
				navigate('/dashboard');
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleSubmitDataset = (e) => {
		e.preventDefault();
		addDataset();
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
					onChange={onDatasetFormChange}
					InputProps={{
						endAdornment: <InputAdornment position='end'>bpm</InputAdornment>,
					}}
				/>
				<TextField
					type='text'
					name='weight'
					label='Weight'
					onChange={onDatasetFormChange}
					InputProps={{
						endAdornment: <InputAdornment position='end'>kg</InputAdornment>,
					}}
				/>
				<TextField
					type='text'
					name='sleep'
					label='Sleep'
					onChange={onDatasetFormChange}
					InputProps={{
						endAdornment: <InputAdornment position='end'>hrs</InputAdornment>,
					}}
				/>
				<TextField
					type='text'
					name='fatigue'
					label='Fatigue Score'
					onChange={onDatasetFormChange}
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
