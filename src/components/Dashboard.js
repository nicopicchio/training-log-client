import '../App.css';
import SleepChart from './SleepChart';

function Dashboard({ loggedUser }) {
	return (
		<>
			<h1>Dashboard</h1>
			<SleepChart loggedUser={loggedUser} />
		</>
	);
}

export default Dashboard;
