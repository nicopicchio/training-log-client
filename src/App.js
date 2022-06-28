import './App.css';
import Homepage from '../src/components/Homepage';
import RegisterForm from '../src/components/RegisterForm';
import LoginForm from '../src/components/LoginForm';
import Menu from '../src/components/Menu'
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='/register' element={<RegisterForm />} />
				<Route path='/login' element={<LoginForm />} />
				<Route path='/menu' element={<Menu />} />
			</Routes>
		</>
	);
}

export default App;
