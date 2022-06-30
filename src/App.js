import './App.css';
import Homepage from './components/Homepage';
import RegisterForm from '../src/components/RegisterForm';
import LoginForm from '../src/components/LoginForm';
import Menu from '../src/components/Menu';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
	const [loggedUser, setLoggedUser] = useState(null);
	return (
		<>
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='/register' element={<RegisterForm />} />
				<Route
					path='/login'
					element={<LoginForm setLoggedUser={setLoggedUser} />}
				/>
				<Route path='/menu' element={<Menu loggedUser={loggedUser} />} />
			</Routes>
		</>
	);
}

export default App;
