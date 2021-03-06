import './App.css';
import Homepage from './components/Homepage';
import RegisterForm from '../src/components/RegisterForm';
import LoginForm from '../src/components/LoginForm';
import Menu from '../src/components/Menu';
import AddDatasetForm from './components/AddDatasetForm';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Dashboard from '../src/components/Dashboard';

function App() {
	const [loggedUser, setLoggedUser] = useState(null);
	console.log(loggedUser);
	return (
		<>
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='/register' element={<RegisterForm />} />
				<Route path='/login' element={<LoginForm setLoggedUser={setLoggedUser} />} />
				<Route path='/menu' element={<Menu loggedUser={loggedUser} />} />
				<Route path='/add-dataset' element={<AddDatasetForm loggedUser={loggedUser} />} />
				<Route path='/dashboard' element={<Dashboard loggedUser={loggedUser}/> } />
			</Routes>
		</>
	);
}

export default App;
