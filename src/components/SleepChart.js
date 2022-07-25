import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { useState } from 'react';
import axios from 'axios';

const getDataRoute = 'http://localhost:4000/data';

function SleepChart({ loggedUser }) {
	const [data, setData] = useState({
		labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		datasets: [
			{
				label: 'Hours of sleep',
				data: [7, 6.5, 8, 6, 7.5, 6.5, 7],
			},
		],
	});

	const getSleepData = () => {
		axios
			.get(
				getDataRoute,
				{
					userId: loggedUser.id,
				},
				{
					headers: {
						Authorization: `Bearer ${localStorage.getItem('token')}`,
					},
				}
			)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return <Line data={data} />;
}

export default SleepChart;
